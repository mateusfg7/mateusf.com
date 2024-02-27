import React from 'react'
import type { Metadata } from 'next'
import { FolderOpen } from '@phosphor-icons/react/dist/ssr'

import { PostList } from '~/components/post-list'

import {
  getUniqueCategoryList,
  getPostListOfCategory,
  getNormalCategoryString
} from '~/lib/categories'
import { slug } from '~/lib/slug'

interface Props {
  params: { category: string }
}

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: getNormalCategoryString(params.category),
    description: `Posts about ${getNormalCategoryString(
      params.category
    )} category`
  }
}

export default function Page({ params }: Props) {
  const { category } = params

  const postList = getPostListOfCategory(slug(category))

  return (
    <div className="content-container m-auto">
      <h1 className="mb-5 flex justify-center gap-2 text-2xl font-bold md:justify-start">
        <FolderOpen size="1em" weight="duotone" className="text-3xl" />
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
