const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com', 'github.com', 'i.imgur.com']
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/feed'
      },
      {
        source: '/atom',
        destination: '/feed'
      },
      {
        source: '/rss.xml',
        destination: '/feed'
      },
      {
        source: '/atom.xml',
        destination: '/feed'
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)
