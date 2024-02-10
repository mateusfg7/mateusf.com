import { MetadataRoute } from 'next'
import { allRoutes } from './_lib/all-routes'

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map(url => ({
    url,
    lastModified: new Date().toISOString()
  }))
}
