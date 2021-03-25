import { getFrequencyOfValue, removeRepeatedValuesFromArray } from './utils'

export interface CategoriesAndNumberOfPosts {
  category: string
  numberOfPosts: number
}

export const getRawCategoryListFromPosts = (posts: PostData[]): string[] =>
  posts.map(post => post.category)

export const getCategoryListFromPosts = (posts: PostData[]): string[] => {
  const rawCategoryList = getRawCategoryListFromPosts(posts)

  return removeRepeatedValuesFromArray(rawCategoryList)
}

export function getCategoriesAndNumberOfPosts(
  posts: PostData[]
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
  posts: PostData[],
  category: string
): PostData[] => posts.filter(post => post.category === category)
