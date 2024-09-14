import { slug } from '~/lib/slug'
import { removeRepeatedValuesFromArray } from '~/lib/remove-repeated-values-from-array'
import { getFrequencyOfValue } from '~/lib/get-frequency-of-value'
import { Post, posts, tils } from '#content'

const getRawTagList = () => [
  ...posts.filter((post: Post) => !post.test).flatMap(post => post.tags),
  ...tils.flatMap(til => til.tags)
]

export const getUniqueTagList = () =>
  removeRepeatedValuesFromArray(getRawTagList())

export interface TagsAndNumberOfPosts {
  tag: string
  numberOfPosts: number
}
export function getTagsAndNumberOfPosts(): TagsAndNumberOfPosts[] {
  const rawTagList = getRawTagList()
  const uniqueTagList = getUniqueTagList()

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
  const filteredPostList = posts.filter(post => {
    const listOfTags = post.tags.map(rawTag => slug(rawTag))
    return listOfTags.includes(slug(tag))
  })

  return filteredPostList
}

export function getNormalTagString(tag: string) {
  const allTags = getUniqueTagList()

  return allTags.find(currTag => slug(currTag) === slug(tag))
}

export function countAllTags() {
  const tagList = [
    ...tils.flatMap(til => til.tags),
    ...posts.flatMap(post => post.tags)
  ]
  const uniqueTagList = removeRepeatedValuesFromArray(tagList)

  return uniqueTagList.map(tag => ({
    tag,
    count: getFrequencyOfValue(tagList, tag)
  }))
}
