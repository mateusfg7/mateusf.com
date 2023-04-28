import React from 'react'
import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from 'lib/getSortedPosts'

import { KnowledgeList } from 'components/KnowledgeList'

export const metadata: Metadata = {
  title: 'My Knowledge | mfg-b',
  description:
    'List of my knowledge, reflections, notes and likes about all kind of things.'
}

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="blog-content-w m-auto">
      <KnowledgeList posts={posts} separateByYear />
    </div>
  )
}
