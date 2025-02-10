import { Article } from '@phosphor-icons/react/dist/ssr'
import { posts } from '#content'

export async function Posts() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Posts</span>
        <Article size="1em" weight="duotone" />
      </span>
      <div className="flex h-full items-center text-2xl">{posts.length}</div>
    </div>
  )
}
