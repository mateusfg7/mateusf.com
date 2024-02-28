import { defineCollection, s } from 'velite'

export const works = defineCollection({
  name: 'Work',
  pattern: 'works/*.yml',
  schema: s.object({
    position: s.string(),
    description: s.string(),
    company: s.object({
      name: s.string(),
      website: s.string().url().optional(),
      logo: s.image().optional()
    }),
    in: s.isodate(),
    out: s.isodate().optional()
  })
})
