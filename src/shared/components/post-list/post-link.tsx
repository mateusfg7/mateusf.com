import React from 'react'
import Link from 'next/link'

import { Date } from '@/shared/components/date'
import { Post } from 'contentlayer/generated'
import { DraftBadge, PlannedBadge, TestBadge } from './post-badges'
import { CalendarBlank, Clock } from '@/shared/components/icons'

interface Props {
  post: Post
  hideYear?: boolean
}

export function PostLink({ post, hideYear = false }: Props) {
  const showDate = !post.test && post.status !== 'planned'
  const showReadingTime = !post.test && post.status !== 'planned'

  if (post.status === 'planned') {
    return (
      <section className="group cursor-pointer space-y-2">
        <div className="flex items-center justify-start gap-2">
          <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-500">
            {post.title}
          </h2>
          <span className="relative overflow-hidden rounded-lg">
            <span className="shine group-hover:animate-shine group-hover:animate-duration-[1.5s]" />
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
    const Metadata = () => (
      <span className="group-hover:text-neutral-900dark:group-hover:text-neutral-300 flex flex-col items-end justify-center gap-2 whitespace-nowrap rounded-lg p-1 leading-none text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
        {showDate && (
          <span className="inline-flex items-center gap-1">
            <Date
              dateString={post.date}
              dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
            />
            <CalendarBlank />
          </span>
        )}

        {showReadingTime && (
          <span className="inline-flex items-center gap-1">
            <span>{Math.ceil(post.reading_time.minutes)} min read</span>
            <Clock />
          </span>
        )}
      </span>
    )

    return (
      <Link
        href={`/post/${post.id}`}
        className="group flex justify-between gap-3"
      >
        <section className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-start gap-2">
              <h2 className="text-xl font-bold text-neutral-700 group-hover:text-blue-700 dark:text-neutral-500 dark:group-hover:text-blue-500">
                {post.title}
              </h2>

              {post.test && <TestBadge />}
              {post.status === 'draft' && !post.test && <DraftBadge />}
            </div>
          </div>
          <span className="inline-flex items-center gap-3 text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
            {post.description}
          </span>
        </section>
        {(showDate || showReadingTime) && <Metadata />}
      </Link>
    )
  }
}
