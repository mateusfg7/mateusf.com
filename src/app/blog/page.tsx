import React from 'react'
import Link, { LinkProps } from 'next/link'

import { allPosts } from 'contentlayer/generated'
import {
  FolderOpen,
  Tag,
  Notebook,
  Icon as PhosphorIcon
} from '@/shared/wrappers/phosphor-icons'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'

import { PostList } from '@/shared/components/post-list'
import { Title } from '@/shared/components/title'

type TopLinkProps = {
  Icon: PhosphorIcon
  title: string
} & LinkProps
const TopLink = ({ Icon, title, ...rest }: TopLinkProps) => (
  <Link
    {...rest}
    className="inline-flex items-center gap-1 rounded-lg p-2 leading-none text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-900 dark:hover:text-neutral-100"
  >
    <Icon />
    <span>{title}</span>
  </Link>
)

export default function Page() {
  const posts = getSortedPosts(allPosts)

  return (
    <div className="content-container m-auto">
      <Title text="Blog" />
      <div className="flex flex-wrap justify-center gap-4 py-4 md:justify-start">
        <TopLink Icon={FolderOpen} href="/blog/categories" title="Categories" />
        <TopLink Icon={Tag} href="/blog/tag" title="Tags" />
        <TopLink Icon={Notebook} href="/blog/til" title="T.I.L" />
      </div>
      <PostList posts={posts} separateByYear />
    </div>
  )
}
