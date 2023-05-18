import { Post } from 'contentlayer/generated'
import { categorizePostsByYear } from 'lib/categorizePostsByYear'
import { KnowledgeLink } from './KnowledgeLink'

interface Props {
  posts: Post[]
  separateByYear?: boolean
}

export function KnowledgeList({ posts, separateByYear = false }: Props) {
  if (separateByYear) {
    const postsByYear = categorizePostsByYear(posts)

    return (
      <div className="flex flex-col gap-7">
        {postsByYear.map(postsOfYear => (
          <div key={postsOfYear.year}>
            <h1 className="mb-5 rounded-xl bg-neutral-50 p-3 text-2xl font-bold dark:bg-neutral-900">
              {postsOfYear.year === 1 ? 'Posts for test' : postsOfYear.year}
            </h1>
            <div className="flex flex-col gap-3">
              {postsOfYear.posts.map((post, key) => (
                <KnowledgeLink key={key} post={post} hideYear />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex flex-col gap-5">
        {posts.map((post, key) => (
          <KnowledgeLink key={key} post={post} />
        ))}
      </div>
    )
  }
}
