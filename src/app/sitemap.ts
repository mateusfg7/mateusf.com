import { MetadataRoute } from 'next'
import { getUniqueCategoryList } from '@/shared/lib/categories'
import { getUniqueTagListFromPosts } from '@/shared/lib/tags'
import { config } from 'global-config'
import { allPosts } from 'contentlayer/generated'
import { slug } from '@/shared/lib/slug'

export default function sitemap(): MetadataRoute.Sitemap {
  const commonRoutes = [
    '',
    'blog',
    'blog/categories',
    'blog/tag',
    'blog/feed',
    'blog/author',
    'archive/portifolio'
  ].map(route => ({
    url: `${config.webserver.host}/${route}`,
    lastModified: new Date().toISOString()
  }))

  const tags = getUniqueTagListFromPosts().map(tag => ({
    url: `${config.webserver.host}/blog/tag/${slug(tag)}`,
    lastModified: new Date().toISOString()
  }))
  const categories = getUniqueCategoryList().map(category => ({
    url: `${config.webserver.host}/blog/categories/${slug(category)}`,
    lastModified: new Date().toISOString()
  }))
  const posts = allPosts.map(post => ({
    url: `${config.webserver.host}/blog/post/${post.id}`,
    lastModified: new Date(post.date).toISOString()
  }))

  return [
    ...commonRoutes,
    ...tags,
    ...categories,
    ...posts,
    {
      url: `${config.webserver.host}/blog/author/mateusfg7`,
      lastModified: new Date().toISOString()
    }
  ]
}
