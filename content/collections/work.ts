import { defineCollection, s } from 'velite'

export const works = defineCollection({
  name: 'Work',
  pattern: 'works/*.yml',
  schema: s.object({
    position: s.string(),
    description: s.string(),
    in: s.isodate(),
    out: s.isodate().optional(),
    tags: s.array(s.string()).transform(data => data.map(item => item.trim())),
    company: s.object({
      name: s.string(),
      website: s.string().url().optional(),
      logo: s.image().optional()
    })
  })
})
