import { defineCollection, s } from 'velite'
import { slug } from '~/lib/slug'

export const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/*.yml',
  schema: s
    .object({
      title: s.string(),
      description: s.string(),
      core_techs: s
        .array(s.string())
        .transform(data => data.map(tech => tech.trim())),
      tags: s.array(s.string()).transform(data => data.map(tag => tag.trim())),
      priority: s.number().optional().default(3),
      featured: s.boolean().optional().default(false),
      image: s.string().url().optional(),
      repository: s.string().url().optional(),
      files: s.string().url().optional(),
      website: s.string().url().optional()
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
})
