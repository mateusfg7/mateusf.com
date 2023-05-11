import { allPosts } from 'contentlayer/generated'

import { removeRepeatedValuesFromArray, transformToSlug } from './utils'
import { getSortedPosts } from './getSortedPosts'

export function getAuthors() {
  const authors = allPosts.map(post => post.author)

  return removeRepeatedValuesFromArray(authors)
}

export function getAuthorByUser(user: string) {
  return authors.filter(author => transformToSlug(author.user) === transformToSlug(user))[0]
}

export function getPostsByAuthor(authorUsername: string) {
  const postList = allPosts.filter(post => transformToSlug(post.author) === transformToSlug(authorUsername))

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
