import React from 'react'
import Link from 'next/link'

import { Date } from '@/shared/components/date'
import { Post } from 'contentlayer/generated'
import { DraftBadge, PlannedBadge, TestBadge } from './post-badges'

interface Props {
  post: Post
  hideYear?: boolean
}

export function PostLink({ post, hideYear = false }: Props) {
  const showDate = !post.test && post.status !== 'planned'

  if (post.status === 'planned') {
    return (
      <section className="group cursor-pointer space-y-2">
        <div className="flex items-center justify-start gap-2">
          <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-500">
            {post.title}
          </h2>
          <span className="group-hover:animate-wiggle group-hover:animate-infinite">
            <PlannedBadge />
          </span>
        </div>
        <span className="text-neutral-500">
          {showDate && (
            <span>
              <Date
                dateString={post.date}
                dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
              />{' '}
              &#8226;{' '}
            </span>
          )}

          {post.description}
        </span>
      </section>
    )
  } else {
    return (
      <Link href={`/post/${post.id}`} className="group">
        <section className="space-y-2">
          <div className="flex items-center justify-start gap-2">
            <h2 className="text-xl font-bold text-neutral-700 group-hover:text-blue-700 dark:text-neutral-500 dark:group-hover:text-blue-500">
              {post.title}
            </h2>
            {post.test && <TestBadge />}
            {post.status === 'draft' && !post.test && <DraftBadge />}
          </div>
          <span className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
            {showDate && (
              <span>
                <Date
                  dateString={post.date}
                  dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
                />{' '}
                &#8226;{' '}
              </span>
            )}

            {post.description}
          </span>
        </section>
      </Link>
    )
  }
}
