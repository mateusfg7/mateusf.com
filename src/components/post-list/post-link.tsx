import React from 'react'
import Link from 'next/link'
import {
  CompassTool,
  ListBullets,
  NoteBlank,
  TextAlignLeft,
  CalendarBlank,
  Clock
} from '@phosphor-icons/react/dist/ssr'
import { Post } from '#content'

import { Date } from '~/components/date'
import { DraftBadge, PlannedBadge, TestBadge } from './post-badges'

interface Props {
  post: Post
  hideYear?: boolean
}

const TitleIcon = ({ category }: { category: string }) => {
  if (category === 'How To') return <CompassTool size="1em" weight="duotone" />
  if (category === 'Article')
    return <TextAlignLeft size="1em" weight="duotone" />
  if (category === 'Notes') return <NoteBlank size="1em" weight="duotone" />
  if (category === 'List') return <ListBullets size="1em" weight="duotone" />

  return <></>
}

export function PostLink({ post, hideYear = false }: Props) {
  const showDate = !post.test
  const showReadingTime = !post.test

  if (post.status === 'planned') {
    return (
      <section className="group cursor-pointer space-y-1">
        <div className="flex items-center justify-between gap-2 md:justify-start">
          <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-500">
            {post.title}
          </h2>
          <span className="relative overflow-hidden rounded-lg">
            <span className="shine group-hover:animate-shine group-hover:animate-duration-[1.5s]" />
            <PlannedBadge />
          </span>
        </div>
        <span className="hidden text-neutral-500 md:inline">
          {post.description}
        </span>
      </section>
    )
  } else {
    const Metadata = () => (
      <span className="flex items-center gap-4 whitespace-nowrap leading-none text-neutral-600 group-hover:text-neutral-700 dark:group-hover:text-neutral-400 md:flex-col md:items-end md:justify-center md:gap-2">
        {showDate && (
          <span className="inline-flex items-center gap-1 md:flex-row-reverse">
            <CalendarBlank size="1em" />
            <Date
              dateString={post.date}
              dateFormat={hideYear ? 'LLL d' : 'LLL d, yyyy'}
            />
          </span>
        )}

        {showReadingTime && (
          <span className="inline-flex items-center gap-1 md:flex-row-reverse">
            <Clock size="1em" />
            <span>{Math.ceil(post.metadata.readingTime)} min read</span>
          </span>
        )}
      </span>
    )

    return (
      <Link
        href={`/blog/post/${post.slug}`}
        className="group flex flex-col justify-between gap-1 md:flex-row md:gap-3"
      >
        <section>
          <div className="flex items-center justify-between gap-2 md:justify-start">
            <h2 className="flex items-center gap-1 text-lg font-bold text-neutral-700 group-hover:text-blue-700 group-active:text-blue-700 dark:text-neutral-500 dark:group-hover:text-blue-500 group-active:dark:text-blue-500 md:text-xl">
              <span className="text-xl">
                <TitleIcon category={post.category} />
              </span>
              {post.title}
            </h2>
            {post.test && <TestBadge />}
            {post.status === 'draft' && !post.test && <DraftBadge />}
          </div>
          <span className="hidden items-center gap-3 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-700 dark:group-hover:text-neutral-400 group-active:dark:text-neutral-400 md:inline-flex">
            {post.description}
          </span>
        </section>
        {(showDate || showReadingTime) && <Metadata />}
      </Link>
    )
  }
}
