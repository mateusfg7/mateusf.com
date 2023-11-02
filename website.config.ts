export const config = {
  metadata: {
    title: "Mateus Felipe's Hideout",
    description:
      'My internet hideout, here you will find some topics that I am learning and building, thoughts and tech blog posts, and know more about who I am...'
  },
  webserver: {
    host: process.env.HOST ?? 'http://localhost:3000'
  }
}
