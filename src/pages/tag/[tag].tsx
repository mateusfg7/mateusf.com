import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getSortedKnowledgeData } from '../../lib/knowledgeFunctions'
import { getTagListFromPosts, getKnowledgeListOfTag } from '../../lib/tags'
import { KnowledgeData } from '../../lib/types'

import { Container } from '../../components/Container'
import Header from '../../components/Header'
import { KnowledgeLink } from '../../components/KnowledgeLink'

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
        <main>
          {knowledgeList.map((knowledge, key) => {
            return (
              <KnowledgeLink
                key={key}
                id={knowledge.id}
                title={knowledge.title}
                date={knowledge.date}
                description={knowledge.description}
              />
            )
          })}
        </main>
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
