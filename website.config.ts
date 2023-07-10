export const config = {
  metadata: {
    title: 'Mateus Felipe',
    description: "Mateus Felipe's notes, articles, reflections and knowledge..."
  },
  webserver: {
    host: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'
  }
}
