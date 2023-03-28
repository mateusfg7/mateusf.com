import React from 'react'
import type { Metadata } from 'next'

import { Header } from 'components/Header'
import { KnowledgeList } from 'components/KnowledgeList'

import { getUniqueCategoryList, getPostListOfCategory } from 'lib/categories'
import { getSortedPosts } from 'lib/getSortedPosts'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `mfg-b | ${params.category}`,
    description: `Posts about ${params.category} category`
  }
}

export default function Page({ params }: Props) {
  const { category } = params

  const postList = getSortedPosts(getPostListOfCategory(category))

  return (
    <div>
      <Header title={category} isMainTitle />
      <main>
        <KnowledgeList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const categoryList = getUniqueCategoryList()

  return categoryList.map(category => ({ category }))
}
