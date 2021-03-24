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

export function getCategoriesFromPosts(
  posts: Post[]
): CategoriesAndNumberOfPosts[] {
  const allCategories = posts.map(post => {
    return post.category
  })

  const uniqueCategories = allCategories.filter(
    (category, index, originalArray) => {
      return originalArray.indexOf(category) === index
    }
  )

  const categoriesAndNumberOfPosts = uniqueCategories.map(category => {
    const numberOfPosts = getFrequencyOfValue(allCategories, category)

    return {
      category,
      numberOfPosts
    }
  })

  return categoriesAndNumberOfPosts
}
