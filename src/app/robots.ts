import { MetadataRoute } from 'next'
import { host } from '@/shared/lib/webserver-constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${host}/sitemap.xml`
  }
}
