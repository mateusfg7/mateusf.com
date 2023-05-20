import { Post } from 'contentlayer/generated'

export function separatePostsByStatus(posts: Post[]) {
  const publishedPosts = posts.filter(post => post.status === 'published')
  const draftPosts = posts.filter(post => post.status === 'draft')
  const plannedPosts = posts.filter(post => post.status === 'planned')

  return { publishedPosts, draftPosts, plannedPosts }
}
