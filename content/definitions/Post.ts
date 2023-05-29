import { defineDocumentType, defineNestedType } from 'contentlayer/source-files'
import { slug } from '../../src/shared/lib/slug'
import { authors } from './author-list'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    user: {
      type: 'string',
      description: 'Author username'
    },
    name: {
      type: 'string',
      description: 'Author name'
    },
    email: {
      type: 'string',
      description: 'Author contact email'
    },
    url: {
      type: 'string',
      description: 'Author url'
    }
  }
}))

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
    },
    author_info: {
      type: 'nested',
      of: Author,
      resolve: post => authors.find(author => author.user === post.author)
    }
  }
}))
