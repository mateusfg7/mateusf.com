import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Folder } from '@phosphor-icons/react/dist/ssr'

import { slug } from '~/lib/slug'
import { getCategoriesAndNumberOfPosts } from '~/lib/categories'

export const metadata: Metadata = {
  title: 'Blog Categories',
  description: 'Post categories about all kind of things'
}

export default function Page() {
  const categories = getCategoriesAndNumberOfPosts()

  return (
    <div className="content-container m-auto">
      <h1 className="mb-5 text-center text-2xl font-bold md:text-left">
        Categories
      </h1>
      <div className="hidden flex-wrap gap-2 md:flex">
        {categories
          .sort((a, b) => b.numberOfPosts - a.numberOfPosts)
          .map((categoryData, index) => (
            <Link
              key={index}
              href={`/blog/categories/${slug(categoryData.category)}`}
            >
              <div className="rounded-lg border-2 border-solid border-neutral-700 px-4 py-1 font-bold text-neutral-700 duration-100 hover:cursor-pointer hover:border-blue-700 hover:bg-blue-700/10 hover:text-blue-700 dark:border-neutral-500  dark:text-neutral-500 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-500">
                <p>
                  {categoryData.category}
                  <sup> {categoryData.numberOfPosts} </sup>
                </p>
              </div>
            </Link>
          ))}
      </div>
      <div className="flex flex-col gap-2 md:hidden">
        {categories
          .sort((a, b) => b.numberOfPosts - a.numberOfPosts)
          .map((categoryData, index) => (
            <Link
              key={index}
              href={`/blog/categories/${slug(categoryData.category)}`}
            >
              <div className="flex items-center gap-4 rounded-md bg-neutral-300/10 p-4 font-bold leading-none text-neutral-700 active:bg-blue-700/10 active:text-blue-700 dark:bg-neutral-800/10 dark:text-neutral-500 active:dark:bg-blue-500/10 active:dark:text-blue-500">
                <span className="inline-flex items-end gap-1">
                  <Folder size="1em" weight="duotone" />
                  <span>{categoryData.category}</span>
                </span>
                <span className="h-px flex-1 border-b border-dotted border-neutral-700 dark:border-neutral-500" />
                <span>{categoryData.numberOfPosts}</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
