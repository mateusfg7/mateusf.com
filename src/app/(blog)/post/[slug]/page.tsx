import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { RiHistoryLine } from 'react-icons/ri'
import { FiTag } from 'react-icons/fi'

import { allPosts, type Post } from 'contentlayer/generated'

import { Header } from 'components/Header'
import { Date } from 'components/Date'
import { ReadProgress } from 'components/ReadProgress'

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

export default function Page({ params }: Props) {
  const post = allPosts.find(post => post.id === params.slug) as Post

  const tags = post.tags.split(',')
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className='blog-content-w m-auto'>
        <div className="pb-4 px-0 leading-6 border-b border-neutral-500 mb-8">
          <h1 className="mb-2 font-bold text-xl">{post.title}</h1>
          <div>
            <p>
              <Date dateString={post.date} /> &#8226;{' '}
              <Link
                href={`/category/${post.category}`}
                className="hover:text-blue-500 dark:hover:text-blue-400"
              >
                {post.category}
              </Link>
            </p>
            {post.lastUpdate && (
              <p
                className="flex items-center gap-1 text-neutral-500"
                title="Last Update"
              >
                <Date dateString={post.lastUpdate} /> <RiHistoryLine />
              </p>
            )}
            <p className="flex flex-wrap gap-3 mt-1">
              {tags.map((tag, index) => (
                <Link href={`/tag/${tag.trim()}`} key={index}>
                  <span className="flex items-center justify-center gap-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200 hover:cursor-pointe">
                    {tag} <FiTag size={15} />
                  </span>
                </Link>
              ))}
            </p>
          </div>
        </div>
        <div className="post-content">
          <MDXContent />
        </div>
    </div>
  )
}

export async function generateStaticParams() {
  return allPosts.map(post => ({
    slug: post.id
  }))
}
