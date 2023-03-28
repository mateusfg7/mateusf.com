import React from 'react'
import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from 'lib/getSortedPosts'

import { Header } from 'components/Header'
import { KnowledgeList } from 'components/KnowledgeList'

export const metadata: Metadata = {
  title: 'My Knowledge | mfg-b',
  description:
    'List of my knowledge, reflections, notes and likes about all kind of things.'
}

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div>
      <Header title="Knowledge" isMainTitle />
      <main>
        <KnowledgeList posts={posts} />
      </main>
    </div>
  )
}
