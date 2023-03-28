import React from 'react'
import Link from 'next/link'

import { Date } from './Date'

interface Props {
  id: string
  title: string
  key: number
  description: string
  date: string
}

export function KnowledgeLink({ id, key, title, date, description }: Props) {
  return (
    <Link href={`/post/${id}`} className="group" key={key}>
      <section className="mb-8">
        <h2 className="text-xl font-bold text-neutral-700 dark:text-neutral-500 group-hover:text-blue-700 dark:group-hover:text-blue-500">
          {title}
        </h2>
        <span className="text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
          <Date dateString={date} /> &#8226; {description}
        </span>
      </section>
    </Link>
  )
}
