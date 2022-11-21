import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { Container } from '../components/Container'
import Header from '../components/Header/index'
import { KnowledgeLink } from '../components/KnowledgeLink'

import { getSortedKnowledgeData } from '../lib/knowledgeFunctions'
import { KnowledgeData } from '../lib/types'

interface Props {
  avatarUrl: string
  allKnowledgeData: KnowledgeData[]
}

const Home: React.FC<Props> = ({ avatarUrl, allKnowledgeData }) => {
  return (
    <div>
      <Head>
        <title>Knowledge</title>
      </Head>

      <Container>
        <Header imageUrl={avatarUrl} title="Knowledge" />
        <main>
          {allKnowledgeData.map((knowledge, key) => {
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

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allKnowledgeData = getSortedKnowledgeData()

  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4',
      allKnowledgeData
    }
  }
}
