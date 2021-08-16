/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Date from '../../components/Date'

import { getSortedKnowledgeData } from '../../lib/knowledgeFunctions'
import {
  getCategoryListFromPosts,
  getKnowledgeListOfCategory
} from '../../lib/categories'
import { KnowledgeData } from '../../lib/types'

import { Post } from '../../styles/pages/category'

interface Props {
  category: string
  posts: KnowledgeData[]
}

const Category: React.FC<Props> = ({ category, posts }) => {
  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>
      <Container>
        <Header
          imageUrl="https://avatars1.githubusercontent.com/u/40613276?v=4"
          title={category}
        />
        <Main>
          {posts.map((post, key) => {
            return (
              <Link key={key} href={`/post/${post.id}`}>
                <a>
                  <Post>
                    <h2>{post.title}</h2>
                    <span>
                      <Date dateString={post.date} />
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

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getSortedKnowledgeData()
  const categoryList = getCategoryListFromPosts(posts)

  const paths = categoryList.map(category => ({ params: { category } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category

  const allPostsData = getSortedKnowledgeData()

  if (typeof category == 'string') {
    const posts = getKnowledgeListOfCategory(allPostsData, category)

    return {
      props: {
        category,
        posts
      }
    }
  }

  return {
    props: {}
  }
}
