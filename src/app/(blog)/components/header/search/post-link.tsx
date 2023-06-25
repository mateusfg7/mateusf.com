import {
  FileDashed,
  PencilSimpleLine,
  Code,
  Article
} from '@/shared/lib/phosphor-icons'
import { Post } from 'contentlayer/generated'
import Link from 'next/link'

interface Props {
  post: Post
  toggleIsOpen: () => void
}

export function PostLink({ post, toggleIsOpen }: Props) {
  if (post.status === 'planned') {
    return (
      <div className="flex items-center gap-3 rounded-xl p-3 text-lg text-neutral-500 transition-colors hover:bg-neutral-500/10 hover:text-neutral-800 hover:dark:bg-neutral-800/10 dark:hover:text-neutral-50">
        {post.status === 'planned' && !post.test && (
          <PencilSimpleLine weight="duotone" />
        )}
        {post.test && <Code weight="duotone" />}

        <span>{post.title}</span>
      </div>
    )
  }

  return (
    <Link href={`/post/${post.id}`} onClick={toggleIsOpen}>
      <div className="flex items-center gap-3 rounded-xl p-3 text-lg text-neutral-500 transition-colors hover:bg-neutral-500/10 hover:text-neutral-800 hover:dark:bg-neutral-700/10 dark:hover:text-neutral-400">
        {post.status === 'draft' && !post.test && (
          <FileDashed weight="duotone" />
        )}
        {post.status === 'published' && !post.test && (
          <Article weight="duotone" />
        )}
        {post.test && <Code weight="duotone" />}

        <span>{post.title}</span>
      </div>
    </Link>
  )
}
