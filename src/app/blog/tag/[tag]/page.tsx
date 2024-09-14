import React from 'react'
import type { Metadata } from 'next'
import { Tag } from '@phosphor-icons/react/dist/ssr'

import { PostList } from '~/components/post-list'

import {
  getUniqueTagList,
  getPostListBasedOnTag,
  getNormalTagString
} from '~/lib/tags'
import { getSortedPosts } from '~/lib/get-sorted-posts'
import { slug } from '~/lib/slug'
import { tils } from '#content'
import { TilList } from '~/components/til-list'
import { Title } from '~/components/title'

interface Props {
  params: { tag: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: getNormalTagString(params.tag),
    description: `Posts with tag "${getNormalTagString(params.tag)}"`
  }
}

export default function Page({ params }: Props) {
  const { tag } = params

  const postList = getSortedPosts(getPostListBasedOnTag(slug(tag)))
  const tilList = tils.filter(til => til.tags.includes(tag))

  return (
    <div className="content-container m-auto space-y-7">
      <h1 className="mb-5 flex items-end justify-center gap-2 text-2xl font-bold md:justify-start">
        {getNormalTagString(tag)}
        <Tag size="1em" weight="duotone" />
      </h1>
      {postList.length > 0 && (
        <div className="space-y-4">
          <Title text="Blog Posts" />
          <PostList posts={postList} />
        </div>
      )}
      {tilList.length > 0 && (
        <div className="space-y-4">
          <Title text="T.I.L." />
          <TilList tils={tilList} />
        </div>
      )}
    </div>
  )
}

export async function generateStaticParams() {
  const tagList = getUniqueTagList()

  return tagList.map(tag => ({ tag: slug(tag) }))
}
