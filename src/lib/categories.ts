import { getFrequencyOfValue, removeRepeatedValuesFromArray } from './utils'

interface Post {
  date: string
  title: string
  category: string
  tags: string
  id: string
}

export interface CategoriesAndNumberOfPosts {
  category: string
  numberOfPosts: number
}

export const getRawCategoryListFromPosts = (posts: Post[]): string[] =>
  posts.map(post => post.category)

export const getCategoryListFromPosts = (posts: Post[]): string[] => {
  const rawCategoryList = getRawCategoryListFromPosts(posts)

  return removeRepeatedValuesFromArray(rawCategoryList)
}

export function getCategoriesAndNumberOfPosts(
  posts: Post[]
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

export const getPostsOfCategory = (posts: Post[], category: string): Post[] =>
  posts.filter(post => post.category === category)
