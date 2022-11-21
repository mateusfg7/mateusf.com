import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import {
  getAllKnowledgeIds,
  getKnowledgeData
} from '../../lib/knowledgeFunctions'
import { getHashHeaderOfData } from '../../lib/utils'
import { KnowledgeData } from '../../lib/types'
import { unifiedContentProcessor } from '../../lib/unifiedContentProcessor'

import { Container } from '../../components/Container'
import { Header } from '../../components/Header'
import { Date } from '../../components/Date'
import { ReadProgress } from '../../components/ReadProgress'

import { RiHistoryLine } from 'react-icons/ri'

import 'highlight.js/styles/github.css'

interface KnowledgeDataWithContent extends KnowledgeData {
  content: string
}
interface Props {
  knowledgeData: KnowledgeDataWithContent
  knowledgeId: string
}

const Knowledge: React.FC<Props> = ({ knowledgeData, knowledgeId }) => {
  const tags = knowledgeData.tags.split(',')

  return (
    <div>
      <Head>
        <title>{knowledgeData.title}</title>
      </Head>

      <ReadProgress />

      <Container>
        <Header
          imageUrl="https://avatars1.githubusercontent.com/u/40613276?v=4"
          title={knowledgeId}
        />
        <main>
          <div className="py-4 px-0 leading-6 border-b-[1px] border-unselectedSecondText mb-8">
            <h2 className="mb-2 font-bold text-xl">{knowledgeData.title}</h2>
            <div>
              <p>
                <Date dateString={knowledgeData.date} /> &#8226;{' '}
                <Link href={`/category/${knowledgeData.category}`}>
                  {knowledgeData.category}
                </Link>
              </p>
              {knowledgeData.lastUpdate && (
                <p
                  className="flex items-center gap-1 text-unselectedSecondText"
                  title="Last Update"
                >
                  <Date dateString={knowledgeData.lastUpdate} />{' '}
                  <RiHistoryLine />
                </p>
              )}
              <p className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                  <Link href={`/tag/${tag.trim()}`} key={index}>
                    <span className="text-unselectedSecondText hover:text-text transition-colors duration-200 hover:cursor-pointe">
                      {tag}
                    </span>
                  </Link>
                ))}
              </p>
            </div>
          </div>
          <div className="knowledge-content">
            {unifiedContentProcessor(knowledgeData.content)}
          </div>
        </main>
      </Container>
    </div>
  )
}

export default Knowledge

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllKnowledgeIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const knowledgeData = await getKnowledgeData(
    typeof params.id === 'string' ? params.id : ''
  )
  const knowledgeId = getHashHeaderOfData(knowledgeData.content)

  return {
    props: {
      knowledgeData,
      knowledgeId
    }
  }
}
