import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import { rehypePrettyCodeOptions } from './src/lib/rehypePrettyCode'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeToc,
      rehypeKatex,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap'
        }
      ]
    ]
  }
})
