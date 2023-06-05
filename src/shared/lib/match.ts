import { Post } from 'contentlayer/generated'
import { slug } from '@/shared/lib/slug'

export function searchMath(post: Post, search: string) {
  const sluggedSearch = slug(search)

  let weight = 0
  const sources = [
    post.title,
    post.description,
    post.author,
    post.category,
    post.status,
    post.tags
  ]

  sources.forEach(source => slug(source).includes(sluggedSearch) && weight++)

  return weight
}
