import { Post } from 'contentlayer/generated'
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
            <h1 className="mb-5 text-center md:text-left rounded-xl bg-neutral-50 p-3 text-2xl font-bold dark:bg-neutral-900">
              {postsOfYear.year}
            </h1>
            <div className="flex flex-col my-5 md:my-0 gap-4 md:gap-3">
              {postsOfYear.posts.map((post, key) => (
                <PostLink key={key} post={post} hideYear />
              ))}
            </div>
          </div>
        ))}
        <div>
          <h1 className="mb-5 rounded-xl text-center md:text-left bg-neutral-50 p-3 text-2xl font-bold dark:bg-neutral-900">
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
