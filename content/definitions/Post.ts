import { defineDocumentType } from 'contentlayer/source-files'
import { slug } from '../../src/shared/lib/slug'
import { authors } from '../../src/shared/lib/authors'

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
    },
    status: {
      type: 'enum',
      options: ['published', 'draft', 'planned'],
      default: 'draft'
    },
    test: {
      type: 'boolean',
      default: false
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: post => slug(post.title)
    }
  }
}))
