import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkBreaks from 'remark-breaks'
import remarkHint from 'remark-hint'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiftHeading from 'rehype-shift-heading'

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import {
  rehypePrettyCodeOptions,
  rehypeAutolinkHeadingsOptions,
  rehypeShiftHeadingOptions
} from './content/plugin'

export default makeSource({
  contentDirPath: 'contentlayer',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkBreaks, remarkHint],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeToc,
      rehypeKatex,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      [rehypeShiftHeading, rehypeShiftHeadingOptions]
    ]
  }
})
