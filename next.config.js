/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '*.githubusercontent.com'
      },
      {
        hostname: 'github.com'
      },
      {
        hostname: '*.imgur.com'
      },
      {
        hostname: 'mateusf.com'
      },
      {
        hostname: 'lastfm.freetls.fastly.net'
      },
      {
        hostname: '*.catsjuice.com'
      },
      {
        hostname: '*.scdn.co'
      }
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
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [{ key: 'Access-Control-Allow-Origin', value: '*' }]
      }
    ]
  }
}

module.exports = nextConfig
