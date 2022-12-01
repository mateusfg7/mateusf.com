import rehypePrettyCode from 'rehype-pretty-code'

import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { rehypePrettyCodeOptions } from './src/lib/rehypePrettyCode'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: 'posts/*.mdx',
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
    }
  },
  computedFields: {
    id: {
      type: 'string',
      resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
})
