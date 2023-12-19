import { allPosts } from 'contentlayer/generated'
import { Article } from '@/shared/wrappers/phosphor-icons'

export async function Posts() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Posts</span>
        <Article weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{allPosts.length}</div>
    </div>
  )
}
