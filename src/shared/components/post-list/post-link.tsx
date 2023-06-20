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
  const showDate = !post.test
  const showReadingTime = !post.test

  if (post.status === 'planned') {
    return (
      <section className="group cursor-pointer space-y-2">
        <div className="flex items-center justify-between md:justify-start gap-2">
          <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-500">
            {post.title}
          </h2>
          <span className="relative overflow-hidden rounded-lg">
            <span className="shine group-hover:animate-shine group-hover:animate-duration-[1.5s]" />
            <PlannedBadge />
          </span>
        </div>
        <span className="hidden md:inline text-neutral-500">
          {post.description}
        </span>
      </section>
    )
  } else {
    const Metadata = () => (
      <span className="flex items-center md:flex-col md:items-end md:justify-center gap-4 md:gap-2 whitespace-nowrap leading-none text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
        {showDate && (
          <span className="inline-flex md:flex-row-reverse items-center gap-1">
            <CalendarBlank />
            <Date
              dateString={post.date}
              dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
            />
          </span>
        )}

        {showReadingTime && (
          <span className="inline-flex md:flex-row-reverse items-center gap-1">
            <Clock />
            <span>{Math.ceil(post.reading_time.minutes)} min read</span>
          </span>
        )}
      </span>
    )

    return (
      <Link
        href={`/post/${post.id}`}
        className="group flex flex-col md:flex-row justify-between gap-1 md:gap-3"
      >
        <section className="space-y-1">
          <div className="flex items-center justify-between md:justify-start gap-2">
            <h2 className="text-xl font-bold text-neutral-700 group-hover:text-blue-700 dark:text-neutral-500 group-active:text-blue-700 group-active:dark:text-blue-500 dark:group-hover:text-blue-500">
              {post.title}
            </h2>
            {post.test && <TestBadge />}
            {post.status === 'draft' && !post.test && <DraftBadge />}
          </div>
          <span className="hidden md:inline-flex items-center gap-3 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-700 group-active:dark:text-neutral-400 dark:group-hover:text-neutral-400">
            {post.description}
          </span>
        </section>
        {(showDate || showReadingTime) && <Metadata />}
      </Link>
    )
  }
}
