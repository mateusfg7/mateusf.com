import { allPosts } from 'contentlayer/generated'
import { slug } from '~/lib/slug'
import { removeRepeatedValuesFromArray } from '~/lib/remove-repeated-values-from-array'
import { getFrequencyOfValue } from '~/lib/get-frequency-of-value'

const getRawTagListFromPosts = (): string[] => {
  const tagList = allPosts
    .filter(post => !post.test)
    .flatMap(post => {
      return post.tags.split(',')
    })
    .map(tag => tag.trim())

  return tagList
}

export const getUniqueTagListFromPosts = () =>
  removeRepeatedValuesFromArray(getRawTagListFromPosts())

export interface TagsAndNumberOfPosts {
  tag: string
  numberOfPosts: number
}
export function getTagsAndNumberOfPosts(): TagsAndNumberOfPosts[] {
  const rawTagList = getRawTagListFromPosts()
  const uniqueTagList = getUniqueTagListFromPosts()

  const tagsAndNumberOfPosts = uniqueTagList.map(tag => {
    const numberOfPosts = getFrequencyOfValue(rawTagList, tag)

    return {
      tag,
      numberOfPosts
    }
  })

  return tagsAndNumberOfPosts
}

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
