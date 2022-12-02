import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'

import {
  getUniqueCategoryList,
  getPostListOfCategory
} from '../../lib/categories'

import { KnowledgeLink } from '../../components/KnowledgeLink'
import { Post } from 'contentlayer/generated'

interface Props {
  category: string
  postList: Post[]
}

const Category: React.FC<Props> = ({ category, postList }) => {
  return (
    <div>
      <Head>
        <title>{category}</title>
      </Head>
      <Container>
        <Header title={category} />
        <main>
          {postList.map((post, key) => {
            return (
              <KnowledgeLink
                key={key}
                id={post.id}
                title={post.title}
                date={post.date}
                description={post.description}
              />
            )
          })}
        </main>
      </Container>
    </div>
  )
}

export default Category

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryList = getUniqueCategoryList()

  const paths = categoryList.map(category => ({ params: { category } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category

  if (typeof category === 'string') {
    const postList = getPostListOfCategory(category)

    return {
      props: {
        category,
        postList
      }
    }
  }

  return {
    props: {}
  }
}
