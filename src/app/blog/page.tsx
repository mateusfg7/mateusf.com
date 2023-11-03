import React from 'react'

import { allPosts } from 'contentlayer/generated'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'

import { PostList } from '@/shared/components/post-list'
import { Title } from '@/shared/components/title'

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="content-container m-auto">
      <Title text="Blog" />
      <PostList posts={posts} separateByYear />
    </div>
  )
}
