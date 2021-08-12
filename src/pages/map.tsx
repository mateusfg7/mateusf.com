import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container, LinksContainer } from '../styles/pages/map'

import { getSortedPostsData, SortedPostsData } from '../lib/posts'
import {
  CategoriesAndNumberOfPosts,
  getCategoriesAndNumberOfPosts
} from '../lib/categories'

interface Props {
  allPostData: SortedPostsData
  categories: CategoriesAndNumberOfPosts[]
}

const Map: React.FC<Props> = ({allPostData, categories}) => {
  return (
    <div>
      <Head>
        <title>Page Map</title>
      </Head>

      <Container>
        <LinksContainer>
          <code>
            <a href="/">/</a>
          </code>
          <code>
            <a href="/posts">/posts</a>
          </code>
          ${allPostData.map(post =>
            (
              <code>
                <a href={`/post/${post.id}`}>/post/{post.id}</a>
              </code>
            )
          )}
          <code>
            <a href="/categories">/categories</a>
          </code>
          ${categories.map(categoryData =>
            (
              <code>
                <a href={`/category/${categoryData.category}`}>/category/{categoryData.category}</a>
              </code>
            )
          )}
        </LinksContainer>
      </Container>
    </div>
  )
}

export default Map

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostsData()

  const categories = getCategoriesAndNumberOfPosts(allPostData)

  return {
    props: {
      allPostData,
      categories
    }
  }
}
