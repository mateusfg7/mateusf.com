import { visit } from 'unist-util-visit'

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

const saveCodeTagContentToRaw = () => tree => {
  visit(tree, node => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children

      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0].value
    }
  })
}

const addRawCodeToPrettyCodeFragment = () => tree => {
  visit(tree, node => {
    if (node?.type === 'element' && node?.tagName === 'div') {
      if (!('data-rehype-pretty-code-fragment' in node.properties)) {
        return
      }

      node.properties.raw = node.raw
    }
  })
}

export const remarkPlugins = [remarkGfm, remarkMath, remarkBreaks, remarkHint]
export const rehypePlugins = [
  rehypeSlug,
  rehypeToc,
  rehypeKatex,
  [rehypeAutolinkHeadings.pluggin, rehypeAutolinkHeadings.options],
  [rehypeShiftHeading.pluggin, rehypeShiftHeading.options],
  saveCodeTagContentToRaw,
  [rehypePrettyCode.pluggin, rehypePrettyCode.options],
  addRawCodeToPrettyCodeFragment
]
