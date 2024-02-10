import { Post } from 'contentlayer/generated'
import { getSortedPosts } from '~/shared/lib/get-sorted-posts'

import { separatePostsByStatus } from './separate-posts-by-status'
import { categorizePostsByYear } from './categorize-posts-by-year'
import { PostLink } from './post-link'

interface Props {
  posts: Post[]
  separateByYear?: boolean
}

export function PostList({ posts, separateByYear = false }: Props) {
  const postsByStatus = separatePostsByStatus(posts)
  const testPosts = posts.filter(post => post.test)

  if (separateByYear) {
    const postsByYear = categorizePostsByYear([
      ...postsByStatus.publishedPosts,
      ...postsByStatus.draftPosts
    ])

    return (
      <div className="flex flex-col gap-7">
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
            {postsByStatus.plannedPosts.map((post, key) => (
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
        {posts.map((post, key) => (
          <PostLink key={key} post={post} />
        ))}
      </div>
    )
  }
}
