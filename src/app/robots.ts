import { MetadataRoute } from 'next'
import { host } from '@/shared/lib/webserver-constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/post/*/thumbnail'],
    },
    sitemap: `${host}/sitemap.xml`
  }
}
