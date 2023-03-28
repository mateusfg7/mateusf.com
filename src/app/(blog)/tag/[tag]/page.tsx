import React from 'react'
import type { Metadata } from 'next'

import { Header } from 'components/Header'
import { KnowledgeList } from 'components/KnowledgeList'

import { getUniqueTagListFromPosts, getPostListBasedOnTag } from 'lib/tags'
import { getSortedPosts } from 'lib/getSortedPosts'

interface Props {
  params: { tag: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `mfg-b | ${params.tag}`,
    description: `Posts with tag ${params.tag}`
  }
}

export default function Page({ params }: Props) {
  const { tag } = params
  const postList = getSortedPosts(getPostListBasedOnTag(tag))

  return (
    <div>
      <Header title={tag} isMainTitle />
      <main>
        <KnowledgeList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const tagList = getUniqueTagListFromPosts()

  return tagList.map(tag => ({ tag }))
}
