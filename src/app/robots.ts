import { MetadataRoute } from 'next'
import { config } from 'global-config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*'
    },
    sitemap: `${config.webserver.host}/sitemap.xml`
  }
}
