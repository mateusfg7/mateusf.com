import React, { ComponentProps } from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Folder,
  CalendarBlank,
  Clock,
  Tag,
  TextAlignLeft,
  Lightbulb,
  Warning,
  WarningOctagon,
  Check,
  X
} from '@phosphor-icons/react/dist/ssr'
import { BiSolidQuoteAltRight } from 'react-icons/bi'
import { Post, posts } from '#content'

import { slug } from '~/lib/slug'
import { Date } from '~/components/date'
import { GiscusComments } from '~/components/giscus-comments'
import { MDXContent } from '~/components/mdx-content'

import { TopButton } from './_components/top-button'
import { Anchor } from './_components/anchor'
import { PrettyCodeElement } from './_components/pretty-code-element'
import { Spoiler } from './_components/spoiler'

import 'katex/dist/katex.min.css'

interface Props {
  params: { slug: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find(post => post.slug === params.slug) as Post

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    authors: { name: 'Mateus Felipe Gonçalves', url: 'https://mateusf.com' },
    keywords: post.tags,
    publisher: 'Mateus Felipe Gonçalves <contact@mateusf.com>',
    openGraph: {
      title: post.title,
      description: post.description,
      tags: post.tags,
      authors: 'Mateus Felipe Gonçalves <contact@mateusf.com>',
      type: 'article',
      url: `/blog/post/${params.slug}`,
      images: {
        url: `/blog/post/${post.slug}/thumbnail`,
        width: 1200,
        height: 630
      }
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      creator: 'Mateus Felipe Gonçalves <contact@mateusf.com>',
      site: '/',
      images: {
        url: `/blog/post/${post.slug}/thumbnail`,
        width: 1200,
        height: 630
      }
    }
  }
}

const mdxComponents = {
  a: ({ children, href, ...props }) =>
    href?.startsWith('http') ? (
      <Anchor href={href} {...props}>
        {children}
      </Anchor>
    ) : (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  figure: PrettyCodeElement,
  Correct: ({
    children,
    message,
    ...rest
  }: ComponentProps<'div'> & { message?: string }) => (
    <div {...rest} className="answear correct">
      <span className="icon">
        <Check size="1em" />
      </span>
      <div className="content">{children}</div>
      {message && <span className="message">{message}</span>}
    </div>
  ),
  Wrong: ({
    children,
    message,
    ...rest
  }: ComponentProps<'div'> & { message?: string }) => (
    <div {...rest} className="answear wrong">
      <span className="icon">
        <X size="1em" />
      </span>
      <div className="content">{children}</div>
      {message && <span className="message">{message}</span>}
    </div>
  ),
  Tip: ({ children, ...rest }: ComponentProps<'div'>) => (
    <div {...rest} className="hint tip">
      <span className="icon">
        <Lightbulb size="1em" />
      </span>
      {children}
    </div>
  ),
  Warn: ({ children, ...rest }: ComponentProps<'div'>) => (
    <div {...rest} className="hint warn">
      <span className="icon">
        <Warning size="1em" />
      </span>
      {children}
    </div>
  ),
  Error: ({ children, ...rest }: ComponentProps<'div'>) => (
    <div {...rest} className="hint error">
      <span className="icon">
        <WarningOctagon size="1em" />
      </span>
      {children}
    </div>
  ),
  blockquote: ({ children, ...rest }: ComponentProps<'blockquote'>) => (
    <blockquote {...rest}>
      <span className="icon">
        <BiSolidQuoteAltRight size="1em" />
      </span>
      {children}
    </blockquote>
  ),
  Spoiler,
  table: ({ children, ...rest }: ComponentProps<'table'>) => (
    <div className="my-3 overflow-x-auto">
      <table {...rest}>{children}</table>
    </div>
  )
}

const exampleToc = posts[0].toc[0]
type TocEntry = typeof exampleToc
const TocItem = ({
  toc,
  ...rest
}: { toc: TocEntry } & ComponentProps<'li'>) => (
  <li {...rest}>
    <a href={toc.url}>{toc.title}</a>
    {toc.items.length > 0 && (
      <ol className="space-y-2">
        {toc.items.map(childToc => (
          <TocItem
            toc={childToc}
            key={childToc.url}
            className="space-y-2 pl-3"
          />
        ))}
      </ol>
    )}
  </li>
)

export default function Page({ params }: Props) {
  const post = posts.find(post => post.slug === params.slug)

  if (!post) return notFound()

  return (
    <div className="content-container m-auto">
      <div className="flex flex-col gap-4 leading-6">
        <div>
          <h1 className="text-center text-2xl font-bold md:text-left">
            {post.title}
          </h1>
        </div>
        <div className="space-y-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1">
                <CalendarBlank size="1em" />
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
                <Folder size="1em" />
                <Link
                  href={`/blog/categories/${slug(post.category)}`}
                  className="group-dark:hover:text-blue-400 group-hover:text-blue-500"
                >
                  {post.category}
                </Link>
              </span>
              <span className="group inline-flex items-center gap-1">
                <Clock size="1em" />
                <span>{post.metadata.readingTime} min read</span>
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 gap-y-2">
            {post.tags.map((tag, index) => (
              <Link href={`/blog/tag/${slug(tag)}`} key={index}>
                <span className="flex items-center justify-center gap-1 rounded-md bg-neutral-500/5 p-1 leading-none text-neutral-500 transition-colors duration-200 hover:text-neutral-900 dark:hover:text-neutral-100 md:bg-transparent md:p-0">
                  {tag} <Tag size={15} className="hidden md:inline" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-6 h-px w-full bg-neutral-500/50" />
      <div className="post-content">
        {post.toc.length > 0 && (
          <nav className="toc">
            <div className="flex items-center justify-between rounded-lg border-b border-neutral-200 bg-neutral-100 p-4 leading-none dark:border-neutral-800 dark:bg-neutral-900">
              <span>Table of content</span>
              <TextAlignLeft className="text-2xl" size="1em" />
            </div>
            <ol className="space-y-2 p-4">
              {post.toc.map(toc => (
                <TocItem toc={toc} key={toc.url} className="space-y-2" />
              ))}
            </ol>
          </nav>
        )}
        <MDXContent code={post.content} components={mdxComponents} />
      </div>
      <div className="pt-12">
        <GiscusComments />
      </div>
      <TopButton />
    </div>
  )
}

export async function generateStaticParams() {
  return posts
    .filter(post => post.status !== 'planned')
    .map(post => ({
      slug: post.slug
    }))
}
