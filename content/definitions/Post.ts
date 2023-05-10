import { defineDocumentType } from 'contentlayer/source-files'
import { authors } from 'lib/authors'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    date: {
      type: 'date',
      required: true
    },
    lastUpdate: {
      type: 'date'
    },
    description: {
      type: 'string',
      required: true
    },
    category: {
      type: 'string',
      required: true
    },
    tags: {
      type: 'string',
      required: true
    },
    author: {
      type: 'enum',
      options: authors.map(author => author.user),
      required: true
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))
