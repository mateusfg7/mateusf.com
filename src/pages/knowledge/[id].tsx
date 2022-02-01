/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import {
  getAllKnowledgeIds,
  getKnowledgeData
} from '../../lib/knowledgeFunctions'
import { getHashHeaderOfData } from '../../lib/utils'
import { KnowledgeData } from '../../lib/types'

import Container from '../../components/Container'
import Header from '../../components/Header'
import Main from '../../components/Main'
import Date from '../../components/Date'
import ReadProgress from '../../components/ReadProgress'

import { RiHistoryLine } from 'react-icons/ri'

import { KnowledgeHeader, KnowledgeContent } from '../../styles/pages/knowledge'

import { unified } from 'unified'
import markdown from 'remark-parse'
import rehypeHighlight from 'rehype-highlight'
import math from 'remark-math'
import katex from 'rehype-katex'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import gfm from 'remark-gfm'
import toc from 'rehype-toc'
import slug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'

import elixir from 'highlight.js/lib/languages/elixir'
import vim from 'highlight.js/lib/languages/vim'
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import plaintext from 'highlight.js/lib/languages/plaintext'
import sql from 'highlight.js/lib/languages/sql'

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

  const highlightLanguages = {
    elixir,
    vim,
    typescript,
    javascript,
    bash,
    python,
    css,
    xml,
    plaintext,
    sql
  }

  const contentProcessor = unified()
    .use(markdown)
    .use(gfm)
    .use(math)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { languages: highlightLanguages })
    .use(katex)
    .use(slug)
    .use(toc)
    .use(rehype2react, { createElement: React.createElement })

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
        <Main>
          <article>
            <KnowledgeHeader>
              <motion.h2 layoutId={knowledgeData.id}>
                {knowledgeData.title}
              </motion.h2>
              <div>
                <p>
                  <Date dateString={knowledgeData.date} /> &#8226;{' '}
                  <Link href={`/category/${knowledgeData.category}`}>
                    {knowledgeData.category}
                  </Link>
                </p>
                {knowledgeData.lastUpdate && (
                  <p className="last-update" title="Last Update">
                    <Date dateString={knowledgeData.lastUpdate} />{' '}
                    <RiHistoryLine />
                  </p>
                )}
                <p className="tags">
                  {tags.map((tag, index) => (
                    <Link href={`/tag/${tag.trim()}`} key={index}>
                      <span className="tag">{tag}</span>
                    </Link>
                  ))}
                </p>
              </div>
            </KnowledgeHeader>
            <KnowledgeContent>
              {contentProcessor.processSync(knowledgeData.content).result}
            </KnowledgeContent>
          </article>
        </Main>
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
