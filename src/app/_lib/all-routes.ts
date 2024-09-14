import { getUniqueCategoryList } from '~/lib/categories'
import { slug } from '~/lib/slug'
import { getUniqueTagList } from '~/lib/tags'
import { config } from 'global-config'
import { posts } from '#content'

const commonPaths = [
  '',
  'projects',
  'about',
  'about/statistics',
  'blog',
  'blog/categories',
  'blog/tag',
  'blog/feed',
  'guestbook'
]
const tagPaths = getUniqueTagList().map(tag => `blog/tag/${slug(tag)}`)
const categoryPaths = getUniqueCategoryList().map(
  category => `blog/categories/${slug(category)}`
)
const postPaths = posts.map(post => `blog/post/${post.slug}`)

export const allRoutes = [
  ...commonPaths,
  ...tagPaths,
  ...categoryPaths,
  ...postPaths
].map(paths => `${config.webserver.host}/${paths}`)
