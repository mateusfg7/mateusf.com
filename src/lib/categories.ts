interface Post {
  date: string
  title: string
  category: string
  tags: string
  id: string
}

export function getCategoriesFromPosts(posts: Post[]): string[] {
  const allCategories = posts.map(post => {
    return post.category
  })

  const uniqueCategories = allCategories.filter(
    (category, index, originalArray) => {
      return originalArray.indexOf(category) === index
    }
  )

  return uniqueCategories
}
