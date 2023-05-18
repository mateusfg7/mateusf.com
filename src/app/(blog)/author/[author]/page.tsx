import React from 'react'
import type { Metadata } from 'next'

import { KnowledgeList } from 'components/KnowledgeList'
import { getAuthorByUser, getAuthors, getPostsByAuthor } from 'lib/authors'
import { ArrowRight, Envelope } from './Icons'

interface Props {
  params: { author: string }
}

export function generateMetadata({ params }: Props): Metadata {
  const author = getAuthorByUser(params.author)

  return {
    title: `mfg-b | ${author.name}`,
    description: `Posts written by ${author.name} (${author.user}) <${author.email}>`
  }
}

export default function Page({ params }: Props) {
  const author = getAuthorByUser(params.author)

  const postList = getPostsByAuthor(author.user)

  return (
    <div className="blog-content-w m-auto">
      <div className="mb-7">
        <div className="flex items-end gap-2">
          <h1 className="text-2xl font-bold">{author.name}</h1>
          <span className="italic text-neutral-500">{author.user}</span>
        </div>
        <div className="flex items-center gap-5 text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1">
            <Envelope weight="duotone" />
            <span>{author.email}</span>
          </div>
          <a
            href={author.url}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-1 hover:text-black hover:dark:text-white"
          >
            <span>About me</span>
            <ArrowRight className="opacity-0 group-hover:opacity-100" />
          </a>
        </div>
      </div>
      <main>
        <KnowledgeList posts={postList} />
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  const authors = getAuthors()

  return authors.map(author => ({ author }))
}
