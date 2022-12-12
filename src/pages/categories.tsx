import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import {
  CategoriesAndNumberOfPosts,
  getCategoriesAndNumberOfPosts
} from '../lib/categories'

interface Props {
  categories: CategoriesAndNumberOfPosts[]
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div>
      <Head>
        <title>Categories</title>
      </Head>

      <Container>
        <Header title="Categories" />
        <main>
          <div className="flex flex-wrap gap-2">
            {categories.map((categoryData, index) => (
              <Link key={index} href={`/category/${categoryData.category}`}>
                <div className="py-1 px-4 border-2 border-solid border-neutral-700 dark:border-neutral-500 hover:border-blue-700 dark:hover:border-blue-500 font-bold text-neutral-700 dark:text-neutral-500 hover:text-blue-700 dark:hover:text-blue-500 duration-100 hover:cursor-pointer">
                  <p>
                    {categoryData.category}
                    <sup> {categoryData.numberOfPosts} </sup>
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
  const categories = getCategoriesAndNumberOfPosts()

  return {
    props: {
      categories
    }
  }
}
