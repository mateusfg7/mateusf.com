import { visit } from 'unist-util-visit'

import remarkBreaks from 'remark-breaks'
import remarkMath from 'remark-math'

import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from './rehype-autolink-headings'
import rehypeShiftHeadings from './rehype-shift-heading'
import rehypePrettyCode from './rehype-pretty-code'

type NodeChildren = {
  type: string
  tagName: string
  properties: { className: string[] }
  children?: [{ type: string; value: string }]
  position: {
    start: { line: number; column: number; offset: number }
    end: { line: number; column: number; offset: number }
  }
}

const saveCodeTagContentToRaw = () => tree => {
  visit(tree, node => {
    if (node?.type === 'element' && node?.tagName === 'pre') {
      const [codeEl] = node.children as NodeChildren[]

      if (codeEl.tagName !== 'code') return

      node.raw = codeEl.children?.[0].value
    }
  })
}

const addRawCodeToPrettyCodeFragment = () => tree => {
  visit(tree, node => {
    if (node?.type === 'element' && node?.tagName === 'figure') {
      if (!('data-rehype-pretty-code-figure' in node.properties)) {
        return
      }

      node.properties.raw = node.raw
    }
  })
}

export const remarkPlugins = [remarkBreaks, remarkMath]
export const rehypePlugins = [
  rehypeSlug,
  rehypeKatex,
  rehypeAutolinkHeadings,
  rehypeShiftHeadings,
  saveCodeTagContentToRaw,
  rehypePrettyCode,
  addRawCodeToPrettyCodeFragment
]
