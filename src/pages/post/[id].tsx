/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'

import { PostHeader, PostContent } from '../../styles/pages/post'

import { getAllPostIds, getPostData } from '../../lib/posts'

import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/github-gist.css'
interface PostDataWithContent extends PostData {
  contentHtml: string
}
interface Props {
  postData: PostDataWithContent
}

const Post: React.FC<Props> = ({ postData }) => {
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
                <p>date: {postData.date}</p>
                <p>
                  category:{' '}
                  <Link href={`/category/${postData.category}`}>
                    {postData.category}
                  </Link>
                </p>
                <p>tags: {postData.tags}</p>
              </div>
            </PostHeader>
            <PostContent>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
