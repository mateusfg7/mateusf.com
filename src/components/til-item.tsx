import Link from 'next/link'
import { TIL } from '#content'

import { slug } from '~/lib/slug'

import { Date as DateUI } from './date'
import { MDXContent } from './mdx-content'

export function TilItem({ til }: { til: TIL }) {
  return (
    <div className="relative flex flex-col gap-6 border-b border-b-neutral-200 py-12 first:pt-0 last:border-none dark:border-b-neutral-800 md:flex-row md:gap-3">
      <div className="top-24 h-fit flex-1 space-y-2 md:sticky md:space-y-5">
        <div className="space-y-3">
          <h2 className="text-xl font-bold">{til.title}</h2>
          <p>{til.description}</p>
          <span className="text-sm">
            <DateUI dateString={til.date} />
          </span>
        </div>
        <div className="flex flex-wrap gap-1">
          {til.tags.map(tag => (
            <Link
              href={`/blog/tag/${slug(tag)}`}
              className="rounded-lg bg-neutral-400/10 p-1 text-sm leading-none transition-colors hover:bg-neutral-400/20"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      <div className="post-content til-content relative md:w-2/3">
        <span className="absolute -top-24" id={slug(til.title)} />
        <MDXContent code={til.content} />
      </div>
    </div>
  )
}
