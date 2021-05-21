import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'
import Date from '../components/Date'

import { Post } from '../styles/pages/posts'

import { getSortedPostsData } from '../lib/posts'

interface Props {
  avatarUrl: string
  allPostData: PostData[]
}

const Posts: React.FC<Props> = ({ avatarUrl, allPostData }) => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>

      <Container>
        <Header imageUrl={avatarUrl} title="Posts" />
        <Main>
          {allPostData.map((post, key) => {
            return (
              <Link key={key} href={`/post/${post.id}`}>
                <a>
                  <Post>
                    <h2>{post.title}</h2>
                    <span>
                      <Date dateString={post.date} /> &#8226; {post.description}
                    </span>
                  </Post>
                </a>
              </Link>
            )
          })}
        </Main>
      </Container>
    </div>
  )
}

export default Posts

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostData = getSortedPostsData()

  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4',
      allPostData
    }
  }
}
