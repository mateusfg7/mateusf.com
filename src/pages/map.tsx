import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container, LinksContainer } from '../styles/pages/map'

import { getSortedKnowledgeData, SortedKnowledgeData } from '../lib/knowledgeFunctions'
import {
  CategoriesAndNumberOfKnowledge,
  getCategoriesAndNumberOfKnowledge
} from '../lib/categories'

interface Props {
  allPostData: SortedKnowledgeData
  categories: CategoriesAndNumberOfKnowledge[]
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
  const allPostData = getSortedKnowledgeData()

  const categories = getCategoriesAndNumberOfKnowledge(allPostData)

  return {
    props: {
      allPostData,
      categories
    }
  }
}
