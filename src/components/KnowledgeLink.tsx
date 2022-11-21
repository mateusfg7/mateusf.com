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
    <Link href={`/knowledge/${id}`} key={key}>
      <a className="group">
        <section className="mb-8">
          <h2 className="text-xl font-bold text-neutral-700 group-hover:text-blue-700">
            {title}
          </h2>
          <span className="text-neutral-500 group-hover:text-neutral-700">
            <Date dateString={date} /> &#8226; {description}
          </span>
        </section>
      </a>
    </Link>
  )
}
