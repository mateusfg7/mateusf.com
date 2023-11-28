import { defineDocumentType } from 'contentlayer/source-files'

export const Til = defineDocumentType(() => ({
  name: 'TIL',
  contentType: 'mdx',
  filePathPattern: 'til/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    },
    date: {
      type: 'date',
      required: true
    }
  }
}))
