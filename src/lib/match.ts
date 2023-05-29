import { Post } from 'contentlayer/generated'
import { slug } from '@/lib/slug'

export function searchMath(post: Post, search: string) {
  const sluggedSearch = slug(search)

  if (slug(post.title).includes(sluggedSearch)) return true
  if (slug(post.description).includes(sluggedSearch)) return true
  if (slug(post.author).includes(sluggedSearch)) return true
  if (slug(post.category).includes(sluggedSearch)) return true
  if (slug(post.status).includes(sluggedSearch)) return true
  if (slug(post.tags).includes(sluggedSearch)) return true

  return false
}
