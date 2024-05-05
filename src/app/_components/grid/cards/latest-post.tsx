import { posts } from '#content'
import Link from 'next/link'
import { Date } from '~/components/date'
import { getSortedPosts } from '~/lib/get-sorted-posts'

export function LatestPost() {
  const { title } = {
    title: 'My latest post dsdsadsadasdsadsa'
  }

  const latestPost = getSortedPosts(posts)[0]

  const Divider = () => (
    <span className="h-px w-full rounded-full bg-sky-700 opacity-20 dark:bg-sky-500" />
  )

  return (
    <Link
      href={`/blog/post/${latestPost.slug}`}
      className="flex w-full flex-1 transform-gpu flex-col gap-3 overflow-hidden rounded-xl border-2 border-sky-700 bg-sky-50 p-5 transition-all duration-500 hover:scale-[.97] dark:border-sky-500 dark:bg-sky-950/50"
    >
      <span>Latest post</span>

      <Divider />

      <span className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">
        {latestPost.title}
      </span>

      <Divider />

      <span className="opacity-70">
        <Date dateString={latestPost.date} />
      </span>
    </Link>
  )
}
