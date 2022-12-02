import React from 'react'
import Head from 'next/head'

import { Container } from '../components/Container'
import { Header } from '../components/Header'
import { KnowledgeLink } from '../components/KnowledgeLink'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from 'src/lib/getSortedPosts'

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
          {posts.map((post, key) => {
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

export default Home
