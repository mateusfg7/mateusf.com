import React from 'react'
import type { Metadata } from 'next'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { FiTag } from 'react-icons/fi'

import { allPosts, type Post } from 'contentlayer/generated'

import { slug } from '@/shared/lib/slug'
import { Folder } from '@/shared/lib/phosphor-icons'
import { Date } from '@/shared/components/date'
import { CalendarBlank, Clock } from '@/shared/components/icons'
import { TopButton } from './components/top-button'
import { Anchor } from './components/anchor'

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = allPosts.find(post => post.id === params.slug) as Post

  return {
    title: `mfg-b | ${post.title}`,
    description: post.description,
    authors: { name: 'Mateus Felipe Gonçalves <mateusfelipefg77@gmail.com>' },
    openGraph: {
      type: 'article',
      url: `https://mfg-b.vercel.app/post/${params.slug}`
    }
  }
}

const mdxComponents: MDXComponents = {
  a: ({ children, href, ...props }) =>
    href?.startsWith('http') ? (
      <Anchor href={href} {...props}>
        {children}
      </Anchor>
    ) : (
      <a href={href}>{children}</a>
    )
}

export default function Page({ params }: Props) {
  const post = allPosts.find(post => post.id === params.slug) as Post

  const tags = post.tags.split(',').map(tag => tag.trim())
  const MDXContent = useMDXComponent(post.body.code)

  const author = post.author_info

  return (
    <div className="blog-content-w m-auto">
      <div className="mb-8 flex flex-col gap-4 border-b border-neutral-500 pb-5 leading-6">
        <div>
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <div className="flex gap-2 text-neutral-600 dark:text-neutral-400">
            <span>by</span>
            <Link
              href={`/author/${author.user}`}
              className="cursor-pointer hover:text-black dark:hover:text-white"
            >
              {author.name} ({author.user})
            </Link>
          </div>
        </div>
        <div>
          <div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1">
                <CalendarBlank />
                <Date dateString={post.date} />
              </span>
              {post.lastUpdate && (
                <span
                  className="inline-flex items-center gap-1 text-neutral-500"
                  title="Last Update"
                >
                  {'->'} <Date dateString={post.lastUpdate} />
                </span>
              )}
            </div>
            <div className="flex items-center gap-1">
              <span className="group inline-flex items-center gap-1">
                <Folder />
                <Link
                  href={`/categories/${slug(post.category)}`}
                  className="group-dark:hover:text-blue-400 group-hover:text-blue-500"
                >
                  {post.category}
                </Link>
              </span>
              <span className="group inline-flex items-center gap-1">
                <Clock />
                <span>{Math.ceil(post.reading_time.minutes)} min read</span>
              </span>
            </div>
          </div>
          <div className="mt-1 flex flex-wrap gap-3">
            {tags.map((tag, index) => (
              <Link href={`/tag/${slug(tag)}`} key={index}>
                <span className="hover:cursor-pointe flex items-center justify-center gap-1 text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100">
                  {tag} <FiTag size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="post-content">
        <MDXContent components={mdxComponents} />
      </div>
      <TopButton />
    </div>
  )
}

export async function generateStaticParams() {
  return allPosts
    .filter(post => post.status !== 'planned')
    .map(post => ({
      slug: post.id
    }))
}
