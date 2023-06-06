import React from 'react'
import type { Metadata } from 'next'

import { PostList } from '@/shared/components/post-list'

import {
  getUniqueTagListFromPosts,
  getPostListBasedOnTag,
  getNormalTagString
} from '@/shared/lib/tags'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { Tag } from '@/shared/lib/phosphor-icons'
import { slug } from '@/shared/lib/slug'

interface Props {
  params: { tag: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `mfg-b | ${getNormalTagString(params.tag)}`,
    description: `Posts with tag "${getNormalTagString(params.tag)}"`
  }
}

export default function Page({ params }: Props) {
  const { tag } = params
  const postList = getSortedPosts(getPostListBasedOnTag(slug(tag)))

  return (
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 flex items-end gap-2 text-2xl font-bold">
        {getNormalTagString(tag)}
        <Tag />
      </h1>
      <main>
        <PostList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const tagList = getUniqueTagListFromPosts()

  return tagList.map(tag => ({ tag: slug(tag) }))
}
