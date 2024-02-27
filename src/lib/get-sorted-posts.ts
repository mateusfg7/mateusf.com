import { Post } from '#content'

export function getSortedPosts(posts: Post[]) {
  return posts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )
}
