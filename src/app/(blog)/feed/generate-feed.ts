import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { host } from '@/shared/lib/webserver-constants'
import { allPosts } from 'contentlayer/generated'
import { Feed } from 'feed'
import { markdownToHtml } from './markdown-to-html'

export function generateFeed() {
  const date = new Date()

  const posts = getSortedPosts(allPosts).filter(
    post => post.status === 'published'
  )

  const feed = new Feed({
    title: "Mateus Felipe's interests",
    description:
      'This is my "corner of internet", where I take some tests, document my studies and write about some subjects I like...',
    id: host,
    link: host,
    favicon: `${host}/assets/brain.png`,
    copyright: `All rights reserved ${date.getFullYear()}, Mateus Felipe.`,
    updated: posts.length > 0 ? new Date(posts[0].date) : date,
    feedLinks: {
      rss2: `${host}/feed`
    },
    docs: 'https://github.com/mateusfg7/mfg-b',
    generator: 'Feed for Node.js',
    author: {
      name: 'Mateus Felipe Gonçalves',
      email: 'mateusfelipefg77@gmail.com',
      link: 'https://mateusf.vercel.app'
    }
  })

  posts.forEach(async post => {
    const { name, email, url: authorLink } = post.author_info
    const link = `${host}/post/${post.id}`

    feed.addItem({
      link,
      title: post.title,
      id: post.id,
      description: post.description,
      content: markdownToHtml(post.body.raw),
      author: [{ name, email, link: authorLink }],
      date: new Date(post.date),
      category: post.tags.split(',').map(tag => ({ name: tag.trim() })),
      image: {
        url: `${link}/og`,
        type: 'image/png'
      }
    })
  })

  return feed.rss2()
}
