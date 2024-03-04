import { Post } from '#content'
import { getSortedPosts } from '~/lib/get-sorted-posts'

import { categorizePostsByYear } from './categorize-posts-by-year'
import { PostLink } from './post-link'
import { PushPin } from '@phosphor-icons/react/dist/ssr'

interface Props {
  posts: Post[]
  separateByYear?: boolean
}

export function PostList({ posts, separateByYear = false }: Props) {
  const publishedPosts = posts.filter(post => post.status === 'published')
  const draftPosts = posts.filter(post => post.status === 'draft')
  const plannedPosts = posts.filter(post => post.status === 'planned')
  const testPosts = posts.filter(post => post.test)

  if (separateByYear) {
    const pinnedPosts = [...publishedPosts, ...draftPosts].filter(
      post => post.pinned
    )

    const unpinnedPosts = [...publishedPosts, ...draftPosts].filter(
      post => !post.pinned
    )

    const postsByYear = categorizePostsByYear(unpinnedPosts)

    return (
      <div className="flex flex-col gap-7">
        {pinnedPosts.length > 0 && (
          <div>
            <h1 className="mb-5 flex items-center justify-between rounded-xl bg-neutral-100 p-3 text-2xl dark:bg-neutral-950">
              <span>Pinned</span>
              <PushPin size="1em" />
            </h1>
            <div className="flex flex-col gap-3">
              {pinnedPosts.map((post, key) => (
                <PostLink key={key} post={post} />
              ))}
            </div>
          </div>
        )}

        {postsByYear.map(postsOfYear => (
          <div key={postsOfYear.year}>
            <h1 className="mb-5 rounded-xl bg-neutral-100 p-3 text-center text-2xl font-bold dark:bg-neutral-950 md:text-left">
              {postsOfYear.year}
            </h1>
            <div className="my-5 flex flex-col gap-4 md:my-0 md:gap-3">
              {getSortedPosts(postsOfYear.posts).map((post, key) => (
                <PostLink key={key} post={post} hideYear />
              ))}
            </div>
          </div>
        ))}
        <div>
          <h1 className="mb-5 rounded-xl bg-neutral-100 p-3 text-center text-2xl font-bold dark:bg-neutral-950 md:text-left">
            Others
          </h1>
          <div className="flex flex-col gap-3">
            {plannedPosts.map((post, key) => (
              <PostLink key={key} post={post} />
            ))}
            {testPosts.map((post, key) => (
              <PostLink key={key} post={post} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-5">
        {getSortedPosts(posts).map((post, key) => (
          <PostLink key={key} post={post} />
        ))}
      </div>
    )
  }
}
