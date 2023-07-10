const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
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
