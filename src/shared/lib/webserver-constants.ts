const isProduction = process.env.NODE_ENV === 'production'

export const host = isProduction
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'
