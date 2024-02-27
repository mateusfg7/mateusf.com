class VeliteWebpackPlugin {
  static started = false
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      const { build } = await import('velite')
      await build({ watch: dev, clean: !dev })
    })
  }
}

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
      'lastfm.freetls.fastly.net',
      'contribution.catsjuice.com'
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
  },
  webpack: config => {
    config.plugins.push(new VeliteWebpackPlugin())
    return config
  }
}

module.exports = nextConfig
