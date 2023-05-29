import { allPosts } from 'contentlayer/generated'

import { slug } from '@/shared/lib/slug'
import { removeRepeatedValuesFromArray } from '@/shared/lib/remove-repeated-values-from-array'
import { getSortedPosts } from './get-sorted-posts'

export function getAuthors() {
  const authors = allPosts.map(post => post.author)

  return removeRepeatedValuesFromArray(authors)
}

export function getAuthorByUser(user: string) {
  return authors.filter(author => slug(author.user) === slug(user))[0]
}

export function getPostsByAuthor(authorUsername: string) {
  const postList = allPosts.filter(
    post => slug(post.author) === slug(authorUsername)
  )

  return getSortedPosts(postList)
}

export const authors = [
  {
    user: 'mateusfg7',
    name: 'Mateus Felipe Gonçalves',
    email: 'mateusfelipefg77@gmail.com',
    url: 'https://mateusf.vercel.app/portifolio'
  },
  {
    user: 'kmclara',
    name: 'Maria Clara Brito Santana',
    email: 'mariaclarabritosantana@gmail.com',
    url: 'https://instalgram.com/kmclara'
  }
]
