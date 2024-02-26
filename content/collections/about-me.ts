import { defineCollection, s } from 'velite'

export const aboutMe = defineCollection({
  name: 'AboutMe',
  pattern: 'about-me.mdx',
  schema: s.object({
    content: s.mdx()
  }),
  single: true
})
