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
  allKnowledgeData: SortedKnowledgeData
  categories: CategoriesAndNumberOfKnowledge[]
}

const Map: React.FC<Props> = ({allKnowledgeData, categories}) => {
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
          ${allKnowledgeData.map(post =>
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
  const allKnowledgeData = getSortedKnowledgeData()

  const categories = getCategoriesAndNumberOfKnowledge(allKnowledgeData)

  return {
    props: {
      allKnowledgeData,
      categories
    }
  }
}
