/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getAllPostIds, getPostData } from '../../lib/knowledgeFunctions'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Date from '../../components/Date'

import { RiHistoryLine } from 'react-icons/ri'

import { PostHeader, PostContent } from '../../styles/pages/post'

import { unified } from 'unified'
import markdown from 'remark-parse'
import rehypeHighlight from 'rehype-highlight'
import math from 'remark-math'
import katex from 'rehype-katex'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import gfm from 'remark-gfm'
import toc from 'rehype-toc'
import slug from 'rehype-slug'

import elixir from "highlight.js/lib/languages/elixir"
import vim from "highlight.js/lib/languages/vim"
import typescript from "highlight.js/lib/languages/typescript"
import javascript from "highlight.js/lib/languages/javascript"
import bash from "highlight.js/lib/languages/bash"
import python from "highlight.js/lib/languages/python"
import css from "highlight.js/lib/languages/css"
import xml from "highlight.js/lib/languages/xml"
import plaintext from "highlight.js/lib/languages/plaintext"
import sql from "highlight.js/lib/languages/sql"

import 'highlight.js/styles/github.css'
interface PostDataWithContent extends PostData {
  content: string
}
interface Props {
  postData: PostDataWithContent
}

const Post: React.FC<Props> = ({ postData }) => {
  const tags = postData.tags.split(',')

  const highlightLanguages = {
    elixir, vim, typescript,
    javascript, bash, python,
    css, xml, plaintext, sql
  }

  const contentProcessor = unified()
    .use(markdown)
    .use(gfm)
    .use(math)
    .use(remark2rehype)
    .use(rehypeHighlight, { languages: highlightLanguages })
    .use(katex)
    .use(slug)
    .use(toc)
    .use(rehype2react, { createElement: React.createElement })

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Container>
        <Header
          imageUrl="https://avatars1.githubusercontent.com/u/40613276?v=4"
          title={postData.id}
        />
        <Main>
          <article>
            <PostHeader>
              <h2>{postData.title}</h2>
              <div>
                <p>
                  <Date dateString={postData.date} /> &#8226;{' '}
                  <Link href={`/category/${postData.category}`}>
                    {postData.category}
                  </Link>
                </p>
                {postData.lastUpdate && (
                  <p className="last-update" title="Last Update">
                    <Date dateString={postData.lastUpdate} /> <RiHistoryLine />
                  </p>
                )}
                <p className="tags">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </PostHeader>
            <PostContent>
              {contentProcessor.processSync(postData.content).result}
            </PostContent>
          </article>
        </Main>
      </Container>
    </div>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(
    typeof params.id === 'string' ? params.id : ''
  )

  return {
    props: {
      postData
    }
  }
}
