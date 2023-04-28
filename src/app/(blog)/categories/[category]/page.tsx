import React from 'react'
import type { Metadata } from 'next'

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
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 font-bold text-2xl">{category}</h1>
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
