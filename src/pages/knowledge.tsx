import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Container from '../components/Container/index'
import Header from '../components/Header/index'
import Main from '../components/Main/index'
import Date from '../components/Date'

import { KnowledgeSection } from '../styles/pages/knowledge-list'

import { getSortedKnowledgeData } from '../lib/knowledgeFunctions'
import { KnowledgeData } from '../lib/types'

interface Props {
  avatarUrl: string
  allKnowledgeData: KnowledgeData[]
}

const Knowledge: React.FC<Props> = ({ avatarUrl, allKnowledgeData }) => {
  return (
    <div>
      <Head>
        <title>Knowledge</title>
      </Head>

      <Container>
        <Header imageUrl={avatarUrl} title="Knowledge" />
        <Main>
          {allKnowledgeData.map((knowledge, key) => {
            return (
              <Link key={key} href={`/knowledge/${knowledge.id}`}>
                <a>
                  <KnowledgeSection>
                    <h2>{knowledge.title}</h2>
                    <span>
                      <Date dateString={knowledge.date} /> &#8226;{' '}
                      {knowledge.description}
                    </span>
                  </KnowledgeSection>
                </a>
              </Link>
            )
          })}
        </Main>
      </Container>
    </div>
  )
}

export default Knowledge

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allKnowledgeData = getSortedKnowledgeData()

  return {
    props: {
      avatarUrl: 'https://avatars1.githubusercontent.com/u/40613276?v=4',
      allKnowledgeData
    }
  }
}
