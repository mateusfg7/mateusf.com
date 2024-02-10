import { getUniqueCategoryList } from '~/shared/lib/categories'
import { slug } from '~/shared/lib/slug'
import { getUniqueTagListFromPosts } from '~/shared/lib/tags'
import { allPosts } from 'contentlayer/generated'
import { config } from 'global-config'

const commonPaths = [
  '',
  'projects',
  'about',
  'about/statistics',
  'blog',
  'blog/categories',
  'blog/tag',
  'blog/feed',
  'blog/author',
  'guestbook'
]
const tagPaths = getUniqueTagListFromPosts().map(tag => `blog/tag/${slug(tag)}`)
const categoryPaths = getUniqueCategoryList().map(
  category => `blog/categories/${slug(category)}`
)
const postPaths = allPosts.map(post => `blog/post/${post.id}`)

export const allRoutes = [
  ...commonPaths,
  ...tagPaths,
  ...categoryPaths,
  ...postPaths
].map(paths => `${config.webserver.host}/${paths}`)
