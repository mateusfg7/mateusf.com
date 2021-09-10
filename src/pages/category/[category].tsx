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

import { Knowledge } from '../../styles/pages/category'

interface Props {
  category: string
  knowledgeList: KnowledgeData[]
}

const Category: React.FC<Props> = ({ category, knowledgeList }) => {
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
          {knowledgeList.map((knowledge, key) => {
            return (
              <Link key={key} href={`/knowledge/${knowledge.id}`}>
                <a>
                  <Knowledge>
                    <h2>{knowledge.title}</h2>
                    <span>
                      <Date dateString={knowledge.date} />
                    </span>
                  </Knowledge>
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
  const knowledgeList = getSortedKnowledgeData()
  const categoryList = getCategoryListFromPosts(knowledgeList)

  const paths = categoryList.map(category => ({ params: { category } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params.category

  const allKnowledgeData = getSortedKnowledgeData()

  if (typeof category == 'string') {
    const knowledgeList = getKnowledgeListOfCategory(allKnowledgeData, category)

    return {
      props: {
        category,
        knowledgeList
      }
    }
  }

  return {
    props: {}
  }
}
