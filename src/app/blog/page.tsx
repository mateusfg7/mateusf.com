import React from 'react'
import type { Metadata } from 'next'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'

import { PostList } from '@/shared/components/post-list'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'List of my knowledge, reflections, notes and likes about all kind of things.'
}

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="content-container m-auto">
      <PostList posts={posts} separateByYear />
    </div>
  )
}
