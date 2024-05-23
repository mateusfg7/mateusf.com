import Link from 'next/link'
import { posts } from '#content'

import { Date } from '~/components/date'
import { getSortedPosts } from '~/lib/get-sorted-posts'

export function LatestPost() {
  const latestPost = getSortedPosts(posts)[0]

  const Divider = () => (
    <span className="h-px w-full rounded-full bg-neutral-1000 opacity-20" />
  )

  return (
    <Link
      href={`/blog/post/${latestPost.slug}`}
      className="relative flex w-full flex-1 transform-gpu flex-col gap-3 overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-5 transition-all duration-500 hover:scale-[.97]"
    >
      <div className="absolute left-0 right-0 top-1/2 -z-10 flex -translate-y-1/2 justify-around opacity-30 blur-3xl">
        <div className="size-36 animate-background-fade rounded-xl" />
        <div className="size-36 animate-background-fade rounded-xl animate-delay-200" />
      </div>

      <span>Latest post</span>
      <Divider />
      <span className="overflow-hidden text-ellipsis whitespace-nowrap stroke-red-600 stroke-2 text-xl font-bold">
        {latestPost.title}
      </span>
      <Divider />
      <span className="opacity-70">
        <Date dateString={latestPost.date} />
      </span>
    </Link>
  )
}
