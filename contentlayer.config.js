import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import { rehypePrettyCodeOptions } from './src/lib/rehypePrettyCode'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]]
  }
})
