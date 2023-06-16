const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/feed',
      },
      {
        source: '/atom',
        destination: '/feed',
      },
      {
        source: '/rss.xml',
        destination: '/feed',
      },
      {
        source: '/atom.xml',
        destination: '/feed',
      },
    ]
  }
}

module.exports = withContentlayer(nextConfig)
