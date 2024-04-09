import { defineCollection, s } from 'velite'

export const courses = defineCollection({
  name: 'Course',
  pattern: 'courses/*.yml',
  schema: s.object({
    title: s.string(),
    type: s.string(),
    certificate: s.string().url().optional(),
    start: s.isodate(),
    end: s.isodate(),
    ead: s.boolean().default(false),
    tags: s.array(s.string()).transform(data => data.map(item => item.trim())),
    institution: s.object({
      name: s.string(),
      website: s.string().url().optional(),
      logo: s.image().optional()
    })
  })
})
