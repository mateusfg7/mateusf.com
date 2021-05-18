import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container, LinksContainer } from '../styles/pages/map'

import { getSortedPostsData } from '../lib/posts'
import {
  CategoriesAndNumberOfPosts,
  getCategoriesAndNumberOfPosts
} from '../lib/categories'

interface Props {
  allPostData: PostData[]
  categories: CategoriesAndNumberOfPosts[]
}

const Map: React.FC<Props> = ({ allPostData, categories }) => {
  return (
    <div>
      <Head>
        <title>Page Map</title>
      </Head>

      <Container>
        <LinksContainer>
          <Link href="/">
            <code>
              <a>/</a>
            </code>
          </Link>

          <Link href="/posts">
            <code>
              <a>/posts</a>
            </code>
          </Link>

          {allPostData.map((post, key) => {
            return (
              <Link key={key} href={`/post/${post.id}`}>
                <code>
                  <a>{`/post/${post.id}`}</a>
                </code>
              </Link>
            )
          })}

          <Link href="/categories">
            <code>
              <a>/categories</a>
            </code>
          </Link>

          {categories.map((categoryData, index) => (
            <Link key={index} href={`/category/${categoryData.category}`}>
              <code>
                <a>{`/category/${categoryData.category}`}</a>
              </code>
            </Link>
          ))}
        </LinksContainer>
      </Container>
    </div>
  )
}

export default Map

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostData = getSortedPostsData()

  const categories = getCategoriesAndNumberOfPosts(allPostData)

  return {
    props: {
      allPostData,
      categories
    }
  }
}
