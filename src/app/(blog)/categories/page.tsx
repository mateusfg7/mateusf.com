import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { getCategoriesAndNumberOfPosts } from 'lib/categories'
import { slug } from 'lib/utils'

export const metadata: Metadata = {
  title: 'mfg-b | Categories',
  description: 'Post categories about all kind of things'
}

export default function Page() {
  const categories = getCategoriesAndNumberOfPosts()

  return (
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 font-bold text-2xl">Categories</h1>
      <div className="flex flex-wrap gap-2 justify-between">
        {categories
          .sort((a, b) => a.category.localeCompare(b.category))
          .map((categoryData, index) => (
            <Link key={index} href={`/categories/${slug(categoryData.category)}`}>
              <div className="py-1 px-4 rounded-lg border-2 border-solid border-neutral-700 dark:border-neutral-500 hover:border-blue-700 dark:hover:border-blue-500 font-bold text-neutral-700 dark:text-neutral-500 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-blue-700/10 dark:hover:bg-blue-500/10 duration-100 hover:cursor-pointer">
                <p>
                  {categoryData.category}
                  <sup> {categoryData.numberOfPosts} </sup>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
