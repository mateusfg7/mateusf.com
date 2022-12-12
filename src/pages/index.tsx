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
        <title>Knowledge</title>
      </Head>

      <Container>
        <Header title="Knowledge" />
        <main>
          <KnowledgeList posts={posts} />
        </main>
      </Container>
    </div>
  )
}

export default Home
