const isDevelopment = process.env.NODE_ENV === 'development'

export const host = isDevelopment
  ? 'http://localhost:3000'
  : `https://${process.env.HOST}`
