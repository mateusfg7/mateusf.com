import { getFrequencyOfValue } from './utils'

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

export type GetAllCategories = (posts: Post[]) => string[]
export type GetUniqueCategoryList = (posts: Post[]) => string[]

export const getAllCategories: GetAllCategories = posts =>
  posts.map(post => post.category)

export const getUniqueCategoryList: GetUniqueCategoryList = posts => {
  const allCategories = getAllCategories(posts)

  const uniqueCategories = allCategories.filter(
    (category, index, originalArray) => {
      return originalArray.indexOf(category) === index
    }
  )

  return uniqueCategories
}

export function getCategoriesFromPosts(
  posts: Post[]
): CategoriesAndNumberOfPosts[] {
  const categoryList = getUniqueCategoryList(posts)

  const categoriesAndNumberOfPosts = categoryList.map(category => {
    const numberOfPosts = getFrequencyOfValue(categoryList, category)

    return {
      category,
      numberOfPosts
    }
  })

  return categoriesAndNumberOfPosts
}
