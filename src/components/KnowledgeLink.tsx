import React from 'react'
import Link from 'next/link'
import Date from './Date'

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
          <h2 className="text-xl font-bold text-unselectedText group-hover:text-primary">
            {title}
          </h2>
          <span className="text-unselectedSecondText group-hover:text-secondText">
            <Date dateString={date} /> &#8226; {description}
          </span>
        </section>
      </a>
    </Link>
  )
}
