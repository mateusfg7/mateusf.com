import { allPosts } from 'contentlayer/generated'
import { removeRepeatedValuesFromArray, transformToSlug } from './utils'

const getRawTagListFromPosts = (): string[] => {
  const listOfTagList = allPosts.map(post => {
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
    const listOfTags = post.tags.split(',').map(rawTag => transformToSlug(rawTag.trim()))
    return listOfTags.includes(transformToSlug(tag))
  })

  return filteredPostList
}

export function getNormalTagString(tag: string) {
  const allTags = getUniqueTagListFromPosts()

  return allTags.find(currTag => transformToSlug(currTag) === transformToSlug(tag))
}
