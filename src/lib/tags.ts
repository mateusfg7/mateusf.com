import { allPosts } from 'contentlayer/generated'
import { removeRepeatedValuesFromArray } from './utils'

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
    const listOfTags = post.tags.split(',').map(rawTag => rawTag.trim())
    return listOfTags.includes(tag)
  })

  return filteredPostList
}
