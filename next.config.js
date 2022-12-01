const { withContentlayer } = require('next-contentlayer')

const nextConfig = {
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
}

module.exports = withContentlayer(nextConfig)
