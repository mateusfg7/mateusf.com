class VeliteWebpackPlugin {
  static started = false
  constructor(/** @type {import('velite').Options} */ options = {}) {
    this.options = options
  }
  apply(/** @type {import('webpack').Compiler} */ compiler) {
    // executed three times in nextjs !!!
    // twice for the server (nodejs / edge runtime) and once for the client
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return
      VeliteWebpackPlugin.started = true
      const dev = compiler.options.mode === 'development'
      this.options.watch = this.options.watch ?? dev
      this.options.clean = this.options.clean ?? !dev
      const { build } = await import('velite')
      await build(this.options) // start velite
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
