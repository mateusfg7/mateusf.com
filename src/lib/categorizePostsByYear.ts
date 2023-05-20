import { Post } from 'contentlayer/generated'

export function categorizePostsByYear(posts: Post[]) {
  const filteredPosts = posts.filter(post => !post.test)

  const listOfAllYears = filteredPosts.map(post => {
    const date = new Date(post.date)

    return date.getFullYear()
  })

  const listOfUniqueYears = [...new Set(listOfAllYears)]

  const postsByYear = listOfUniqueYears.map(year => {
    return {
      year,
      posts: filteredPosts.filter(
        post => new Date(post.date).getFullYear() === year
      )
    }
  })

  return postsByYear.sort((a, b) => b.year - a.year)
}
