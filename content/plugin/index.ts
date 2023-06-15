import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import remarkHint from 'remark-hint'
import remarkMath from 'remark-math'
import rehypeToc from 'rehype-toc'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'

import rehypeAutolinkHeadings from './rehype-autolink-headings'
import rehypePrettyCode from './rehype-pretty-code'
import rehypeShiftHeading from './rehype-shift-heading'

export const remarkPlugins = [remarkGfm, remarkMath, remarkBreaks, remarkHint]
export const rehypePlugins = [
  rehypeSlug,
  rehypeToc,
  rehypeKatex,
  [rehypePrettyCode.pluggin, rehypePrettyCode.options],
  [rehypeAutolinkHeadings.pluggin, rehypeAutolinkHeadings.options],
  [rehypeShiftHeading.pluggin, rehypeShiftHeading.options]
]
