import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { slug } from '@/shared/lib/slug'
import { getTagsAndNumberOfPosts } from '@/shared/lib/tags'

export const metadata: Metadata = {
  title: 'mfg-b | Tags',
  description: 'Post tags about all kind of things'
}

export default function Page() {
  const tags = getTagsAndNumberOfPosts()

  return (
    <div className="blog-content-w m-auto">
      <h1 className="mb-5 text-2xl font-bold">Tags</h1>
      <div className="flex flex-wrap gap-2">
        {tags
          .sort((a, b) => b.numberOfPosts - a.numberOfPosts)
          .map((categoryData, index) => (
            <Link key={index} href={`/tag/${slug(categoryData.tag)}`}>
              <div className="rounded-lg border-2 border-solid border-neutral-700 py-1 px-4 font-bold text-neutral-700 duration-100 hover:cursor-pointer hover:border-blue-700 hover:bg-blue-700/10 hover:text-blue-700 dark:border-neutral-500  dark:text-neutral-500 dark:hover:border-blue-500 dark:hover:bg-blue-500/10 dark:hover:text-blue-500">
                <p>
                  {categoryData.tag}
                  {categoryData.numberOfPosts > 1 && (
                    <sup> {categoryData.numberOfPosts} </sup>
                  )}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}
