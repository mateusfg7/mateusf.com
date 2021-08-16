import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'

import { CategoryList, CategoryButton } from '../styles/pages/categories'

import { getSortedKnowledgeData } from '../lib/knowledgeFunctions'
import {
  getCategoriesAndNumberOfKnowledge,
  CategoriesAndNumberOfKnowledge
} from '../lib/categories'

interface Props {
  avatarUrl: string
  categories: CategoriesAndNumberOfKnowledge[]
}

const Categories: React.FC<Props> = ({ avatarUrl, categories }) => {
  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>

      <Container>
        <Header imageUrl={avatarUrl} title="Categories" />
        <Main>
          <CategoryList>
            {categories.map((categoryData, index) => (
              <Link key={index} href={`/category/${categoryData.category}`}>
                <CategoryButton>
                  <p>
                    {categoryData.category}
                    <sup> {categoryData.numberOfKnowledge} </sup>
                  </p>
                </CategoryButton>
              </Link>
            ))}
          </CategoryList>
        </Main>
      </Container>
    </div>
  )
}

export default Categories

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allKnowledgeData = getSortedKnowledgeData()

  const categories = getCategoriesAndNumberOfKnowledge(allKnowledgeData)

  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4',
      categories
    },
    revalidate: 20
  }
}
