const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async redirects() {
    return [
      {
        source: '/rss',
        destination: '/feed',
        permanet: true
      },
      {
        source: '/atom',
        destination: '/feed',
        permanet: true
      },
      {
        source: '/rss.xml',
        destination: '/feed',
        permanet: true
      },
      {
        source: '/atom.xml',
        destination: '/feed',
        permanet: true
      },
    ]
  }
}

module.exports = withContentlayer(nextConfig)
