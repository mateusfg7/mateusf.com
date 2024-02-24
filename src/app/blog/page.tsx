import React from 'react'
import { type Metadata } from 'next'
import Link, { LinkProps } from 'next/link'
import { Icon as PhosphorIcon } from '@phosphor-icons/react'
import { FolderOpen, Tag, Notebook } from '@phosphor-icons/react/dist/ssr'

import { getSortedPosts } from '~/lib/get-sorted-posts'

import { PostList } from '~/components/post-list'
import { Title } from '~/components/title'
import { posts } from '#content'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'My personal posts and thoughts about all kind of stuff that I like. Main philosophic and technical text.',
  keywords: [
    'blog',
    'thoughts',
    'texts',
    'technical',
    'tutorials',
    'posts',
    'phisolophy'
  ]
}

type TopLinkProps = {
  Icon: PhosphorIcon
  title: string
} & LinkProps
const TopLink = ({ Icon, title, ...rest }: TopLinkProps) => (
  <Link
    {...rest}
    className="inline-flex items-center gap-1 rounded-lg p-2 leading-none text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-900 dark:hover:text-neutral-100"
  >
    <Icon size="1em" />
    <span>{title}</span>
  </Link>
)

export default function Page() {
  const sortedPosts = getSortedPosts(posts)

  return (
    <div className="content-container m-auto">
      <Title text="Blog" />
      <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
        <TopLink Icon={FolderOpen} href="/blog/categories" title="Categories" />
        <TopLink Icon={Tag} href="/blog/tag" title="Tags" />
        <TopLink Icon={Notebook} href="/blog/til" title="T.I.L" />
      </div>
      <PostList posts={sortedPosts} separateByYear />
    </div>
  )
}
