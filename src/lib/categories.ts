import { allPosts } from 'contentlayer/generated'
import { getFrequencyOfValue, removeRepeatedValuesFromArray } from './utils'

const getRawCategoryList = () => allPosts.map(post => post.category)

export function getUniqueCategoryList(): string[] {
  return removeRepeatedValuesFromArray(getRawCategoryList())
}

export interface CategoriesAndNumberOfPosts {
  category: string
  numberOfPosts: number
}
export function getCategoriesAndNumberOfPosts(): CategoriesAndNumberOfPosts[] {
  const rawCategoryList = getRawCategoryList()
  const uniqueCategoryList = getUniqueCategoryList()

  const categoriesAndNumberOfPosts = uniqueCategoryList.map(category => {
    const numberOfPosts = getFrequencyOfValue(rawCategoryList, category)

    return {
      category,
      numberOfPosts
    }
  })

  return categoriesAndNumberOfPosts
}

export const getPostListOfCategory = (category: string) =>
  allPosts.filter(post => post.category === category)
