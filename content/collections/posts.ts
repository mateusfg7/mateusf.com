import { defineCollection, s } from 'velite'
import { slug } from '~/lib/slug'

export const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      lastUpdate: s.isodate().optional(),
      description: s.string(),
      category: s.string(),
      tags: s
        .string()
        .transform(data => data.split(',').map(tag => tag.trim())),
      status: s.enum(['published', 'draft', 'planned']).default('draft'),
      test: s.boolean().default(false),
      pinned: s.boolean().default(false),
      metadata: s.metadata(),
      toc: s.toc(),
      content: s.mdx(),
      markdown: s.markdown(),
      raw_content: s.custom().transform((data, { meta }) => meta.content)
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
})
