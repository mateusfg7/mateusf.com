/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Date from '../../components/Date'

import { getSortedKnowledgeData } from '../../lib/knowledgeFunctions'
import { getTagListFromPosts, getKnowledgeListOfTag } from '../../lib/tags'
import { KnowledgeData } from '../../lib/types'

import { Knowledge } from '../../styles/general-styled-components'

interface Props {
  tag: string
  knowledgeList: KnowledgeData[]
}

const Tag: React.FC<Props> = ({ tag, knowledgeList }) => {
  return (
    <div>
      <Head>
        <title>{tag}</title>
      </Head>
      <Container>
        <Header
          imageUrl="https://avatars1.githubusercontent.com/u/40613276?v=4"
          title={tag}
        />
        <Main>
          {knowledgeList.map((knowledge, key) => {
            return (
              <Link key={key} href={`/knowledge/${knowledge.id}`}>
                <a>
                  <Knowledge>
                    <motion.h2 layoutId={knowledge.id}>
                      {knowledge.title}
                    </motion.h2>
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

export default Tag

export const getStaticPaths: GetStaticPaths = async () => {
  const knowledgeList = getSortedKnowledgeData()
  const tagList = getTagListFromPosts(knowledgeList)

  const paths = tagList.map(tag => ({ params: { tag } }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params.tag

  const allKnowledgeData = getSortedKnowledgeData()

  if (typeof tag === 'string') {
    const knowledgeList = getKnowledgeListOfTag(allKnowledgeData, tag)

    return {
      props: {
        tag,
        knowledgeList
      }
    }
  }

  return {
    props: {}
  }
}
