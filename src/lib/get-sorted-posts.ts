import { Post } from '#content'

export function getSortedPosts(posts: Post[]) {
  return posts.sort((a, b) => Number(b.date) - Number(a.date))
}
