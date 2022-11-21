import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../components/Container'
import Header from '../components/Header'

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
        <main>
          <div className="flex flex-wrap gap-2">
            {categories.map((categoryData, index) => (
              <Link key={index} href={`/category/${categoryData.category}`}>
                <div className="py-1 px-4 border-2 border-solid border-unselectedText hover:border-primary font-bold text-unselectedText hover:text-primary duration-100 hover:cursor-pointer">
                  <p>
                    {categoryData.category}
                    <sup> {categoryData.numberOfKnowledge} </sup>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </main>
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
