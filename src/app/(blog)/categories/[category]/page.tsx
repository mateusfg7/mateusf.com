import React from 'react'
import type { Metadata } from 'next'

import { PostList } from '@/shared/components/post-list'

import {
  getUniqueCategoryList,
  getPostListOfCategory,
  getNormalCategoryString
} from '@/lib/categories'
import { getSortedPosts } from '@/lib/getSortedPosts'
import { slug } from '@/lib/utils'
import { FolderOpen } from './components/icons'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `mfg-b | ${getNormalCategoryString(params.category)}`,
    description: `Posts about ${getNormalCategoryString(
      params.category
    )} category`
  }
}

export default function Page({ params }: Props) {
  const { category } = params

  const postList = getSortedPosts(getPostListOfCategory(slug(category)))

  return (
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 flex items-center gap-2 text-2xl font-bold">
        <FolderOpen weight="duotone" className="text-3xl" />
        {getNormalCategoryString(category)}
      </h1>
      <main>
        <PostList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const categoryList = getUniqueCategoryList()

  return categoryList.map(category => ({ category: slug(category) }))
}
