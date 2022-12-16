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
        <meta
          name="description"
          content="Post categories about all kind of things"
        />
        <meta name="title" content="mfg-b | Categories" />

        <meta property="og:title" content="mfg-b | Categories" />
        <meta
          property="og:description"
          content="Post categories about all kind of things"
        />

        <meta property="twitter:title" content="mfg-b | Categories" />
        <meta
          property="twitter:description"
          content="Post categories about all kind of things"
        />
        <title>mfg-b | Categories</title>
      </Head>

      <Container>
        <Header title="Categories" isMainTitle />
        <main>
          <div className="flex flex-wrap gap-2">
            {categories.map((categoryData, index) => (
              <Link key={index} href={`/category/${categoryData.category}`}>
                <div className="py-1 px-4 rounded-lg border-2 border-solid border-neutral-700 dark:border-neutral-500 hover:border-blue-700 dark:hover:border-blue-500 font-bold text-neutral-700 dark:text-neutral-500 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-blue-700/10 dark:hover:bg-blue-500/10 duration-100 hover:cursor-pointer">
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
