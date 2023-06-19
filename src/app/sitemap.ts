import { MetadataRoute } from 'next'
import { getUniqueCategoryList } from '@/shared/lib/categories'
import { getUniqueTagListFromPosts } from '@/shared/lib/tags'
import { host } from '@/shared/lib/webserver-constants'
import { allPosts } from 'contentlayer/generated'

export default function sitemap(): MetadataRoute.Sitemap {
  const commonRoutes = ['', 'categories', 'feed', 'tag', 'portifolio'].map(
    route => ({
      url: `${host}/${route}`,
      lastModified: new Date().toISOString()
    })
  )

  const tags = getUniqueTagListFromPosts().map(tag => ({
    url: `${host}/tag/${tag}`,
    lastModified: new Date().toISOString()
  }))
  const categories = getUniqueCategoryList().map(category => ({
    url: `${host}/categories/${category}`,
    lastModified: new Date().toISOString()
  }))
  const posts = allPosts.map(post => ({
    url: `${host}/post/${post.id}`,
    lastModified: new Date(post.date).toISOString()
  }))

  return [
    ...commonRoutes,
    ...tags,
    ...categories,
    ...posts,
    {
      url: `${host}/author/mateusfg7`,
      lastModified: new Date().toISOString()
    }
  ]
}
