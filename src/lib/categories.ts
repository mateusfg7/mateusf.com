import { getFrequencyOfValue, removeRepeatedValuesFromArray } from './utils'
import { KnowledgeData } from './types'
export interface CategoriesAndNumberOfPosts {
  category: string
  numberOfPosts: number
}

export const getRawCategoryListFromPosts = (posts: KnowledgeData[]): string[] =>
  posts.map(post => post.category)

export const getCategoryListFromPosts = (posts: KnowledgeData[]): string[] => {
  const rawCategoryList = getRawCategoryListFromPosts(posts)

  return removeRepeatedValuesFromArray(rawCategoryList)
}

export function getCategoriesAndNumberOfPosts(
  posts: KnowledgeData[]
): CategoriesAndNumberOfPosts[] {
  const rawCategoryList = getRawCategoryListFromPosts(posts)
  const categoryList = getCategoryListFromPosts(posts)

  const categoriesAndNumberOfPosts = categoryList.map(category => {
    const numberOfPosts = getFrequencyOfValue(rawCategoryList, category)

    return {
      category,
      numberOfPosts
    }
  })

  return categoriesAndNumberOfPosts
}

export const getPostsOfCategory = (
  posts: KnowledgeData[],
  category: string
): KnowledgeData[] => posts.filter(post => post.category === category)
