import React from 'react'
import Link from 'next/link'

import { Date } from './Date'
import { Post } from 'contentlayer/generated'

interface Props {
  post: Post
  hideYear?: boolean
}

export function KnowledgeLink({ post, hideYear = false }: Props) {
  return (
    <Link href={`/post/${post.id}`} className="group">
      <section>
        <h2 className="text-xl font-bold text-neutral-700 group-hover:text-blue-700 dark:text-neutral-500 dark:group-hover:text-blue-500">
          {post.title}
        </h2>
        <span className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
          <Date
            dateString={post.date}
            dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
          />{' '}
          &#8226; {post.description}
        </span>
      </section>
    </Link>
  )
}
