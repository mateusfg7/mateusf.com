import React from 'react'
import type { Metadata } from 'next'

import { KnowledgeList } from 'components/KnowledgeList'

import { getUniqueCategoryList, getPostListOfCategory, getNormalCategoryString } from 'lib/categories'
import { getSortedPosts } from 'lib/getSortedPosts'
import { transformToSlug } from 'lib/utils'
import { FolderOpen } from './Icons'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `mfg-b | ${getNormalCategoryString(params.category)}`,
    description: `Posts about ${getNormalCategoryString(params.category)} category`
  }
}

export default function Page({ params }: Props) {
  const { category } = params

  const postList = getSortedPosts(getPostListOfCategory(transformToSlug(category)))

  return (
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 font-bold text-2xl flex items-center gap-2">
        <FolderOpen weight="duotone" className="text-3xl" />
        {getNormalCategoryString(category)}
      </h1>
      <main>
        <KnowledgeList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const categoryList = getUniqueCategoryList()

  return categoryList.map(category => ({ category: transformToSlug(category) }))
}
