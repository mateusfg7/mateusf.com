/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { getAllPostIds, getPostData } from '../../lib/posts'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Date from '../../components/Date'

import { RiHistoryLine } from 'react-icons/ri'

import 'highlight.js/styles/github.css'

import { PostHeader, PostContent } from '../../styles/pages/post'

import { unified } from 'unified'
import markdown from 'remark-parse'
import highlight from 'remark-highlight.js'
import math from 'remark-math'
import katex from 'rehype-katex'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import gfm from 'remark-gfm'
import toc from 'rehype-toc'
import slug from 'rehype-slug'

interface PostDataWithContent extends PostData {
  content: string
}
interface Props {
  postData: PostDataWithContent
}

const Post: React.FC<Props> = ({ postData }) => {
  const tags = postData.tags.split(',')

  const contentProcessor = unified()
    .use(markdown)
    .use(gfm)
    .use(math)
    .use(highlight)
    .use(remark2rehype)
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
