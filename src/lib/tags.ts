import { allPosts } from 'contentlayer/generated'
import { slug } from './slug'
import { removeRepeatedValuesFromArray } from '@/lib/remove-repeated-values-from-array'

const getRawTagListFromPosts = (): string[] => {
  const listOfTagList = allPosts
    .filter(post => !post.test)
    .map(post => {
      return post.tags.split(',')
    })

  let completeRawTagList: string[] = []

  listOfTagList.forEach(tagList => {
    tagList.forEach(tag => completeRawTagList.push(tag.trim()))
  })

  return completeRawTagList
}

export const getUniqueTagListFromPosts = () =>
  removeRepeatedValuesFromArray(getRawTagListFromPosts())

export function getPostListBasedOnTag(tag: string) {
  const filteredPostList = allPosts.filter(post => {
    const listOfTags = post.tags.split(',').map(rawTag => slug(rawTag.trim()))
    return listOfTags.includes(slug(tag))
  })

  return filteredPostList
}

export function getNormalTagString(tag: string) {
  const allTags = getUniqueTagListFromPosts()

  return allTags.find(currTag => slug(currTag) === slug(tag))
}
