const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'avatars.githubusercontent.com',
      'github.com',
      'i.imgur.com',
      'mateusf.com',
      'lastfm.freetls.fastly.net'
    ]
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/blog/feed'
      },
      {
        source: '/atom',
        destination: '/blog/feed'
      },
      {
        source: '/rss.xml',
        destination: '/blog/feed'
      },
      {
        source: '/atom.xml',
        destination: '/blog/feed'
      }
    ]
  }
}

module.exports = withContentlayer(nextConfig)
