import { allPosts } from 'contentlayer/generated'

import { slug } from '@/shared/lib/slug'
import { removeRepeatedValuesFromArray } from '@/shared/lib/remove-repeated-values-from-array'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'

export function getAuthors() {
  const authors = allPosts.map(post => post.author_info)

  return removeRepeatedValuesFromArray(authors)
}

export function getAuthorByUser(user: string) {
  const authors = getAuthors()

  return authors.filter(author => slug(author.user) === slug(user))[0]
}

export function getPostsByAuthor(authorUsername: string) {
  const postList = allPosts.filter(
    post => slug(post.author) === slug(authorUsername)
  )

  return getSortedPosts(postList)
}
