import { defineDocumentType } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: 'projects/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string',
      required: true
    },
    core_techs: {
      type: 'list',
      of: { type: 'string' },
      required: true
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true
    },
    repository: {
      type: 'string'
    },
    files: {
      type: 'string'
    },
    website: {
      type: 'string'
    }
  }
}))
