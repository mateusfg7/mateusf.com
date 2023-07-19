import { defineDocumentType } from 'contentlayer/source-files'

export const AboutMe = defineDocumentType(() => ({
  name: 'About',
  contentType: 'mdx',
  filePathPattern: 'about-me.mdx'
}))
