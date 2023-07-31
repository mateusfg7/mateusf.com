import { MetadataRoute } from 'next'
import { allRoutes } from './lib/all-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map(url => ({
    url,
    lastModified: new Date().toISOString()
  }))
}
