import React from 'react'
import Head from 'next/head'

import { Container } from '../components/Container'
import { Header } from '../components/Header'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from 'src/lib/getSortedPosts'
import { KnowledgeList } from 'src/components/KnowledgeList'

const Home = () => {
  const posts = getSortedPosts(allPosts)

  return (
    <div>
      <Head>
        <meta name="title" content="My Knowledge | mfg-b" />
        <meta
          name="description"
          content="List of my knowledge, reflections, notes and likes about all kind of things."
        />

        <meta property="og:title" content="My Knowledge | mfg-b" />
        <meta
          property="og:description"
          content="List of my knowledge, reflections, notes and likes about all kind of things"
        />

        <meta property="twitter:title" content="My Knowledge | mfg-b" />
        <meta
          property="twitter:description"
          content="List of my knowledge, reflections, notes and likes about all kind of things"
        />

        <title>mfg-b | Knowledge</title>
      </Head>

      <Container>
        <Header title="Knowledge" isMainTitle />
        <main>
          <KnowledgeList posts={posts} />
        </main>
      </Container>
    </div>
  )
}

export default Home
