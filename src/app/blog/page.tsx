import React from 'react'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'

import { PostList } from '@/shared/components/post-list'
import { Title } from '@/shared/components/title'

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="m-auto content-container">
      <Title text="Blog" />
      <PostList posts={posts} separateByYear />
    </div>
  )
}
