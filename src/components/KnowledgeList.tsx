import { Post } from 'contentlayer/generated'
import { KnowledgeLink } from './KnowledgeLink'

interface Props {
  posts: Post[]
}

export function KnowledgeList({ posts }: Props) {
  return (
    <>
      {posts.map((post, key) => {
        return (
          <KnowledgeLink
            key={key}
            id={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
          />
        )
      })}
    </>
  )
}
