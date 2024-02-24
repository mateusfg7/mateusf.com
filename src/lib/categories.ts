import { slug } from '~/lib/slug'
import { removeRepeatedValuesFromArray } from '~/lib/remove-repeated-values-from-array'
import { getFrequencyOfValue } from '~/lib/get-frequency-of-value'
import { posts } from '#content'

const getRawCategoryList = () =>
  posts.filter(post => !post.test).map(post => post.category)

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
  posts.filter(post => slug(post.category) === slug(category))

export function getNormalCategoryString(category: string) {
  const categories = getUniqueCategoryList()

  return categories.find(currCategory => slug(currCategory) === slug(category))
}
