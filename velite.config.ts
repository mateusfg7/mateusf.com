import { defineCollection, defineConfig, s } from 'velite'
import { visit } from 'unist-util-visit'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm' // gfm is enabled by default
import remarkHint from 'remark-hint' // hint doesn't work with the new version of unified
import remarkMath from 'remark-math'
import rehypeToc from 'rehype-toc'
import rehypeSlug from 'rehype-slug'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import rehypePrettyCode from './content/plugin/rehype-pretty-code'
import rehypeShiftHeading from './content/plugin/rehype-shift-heading'

import { slug } from '~/lib/slug'

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

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      lastUpdate: s.isodate().optional(),
      description: s.string(),
      category: s.string(),
      tags: s
        .string()
        .transform(data => data.split(',').map(tag => tag.trim())),
      status: s.enum(['published', 'draft', 'planned']).default('draft'),
      test: s.boolean().default(false),
      metadata: s.metadata(),
      content: s.mdx()
    })
    .transform(data => ({
      ...data,
      slug: slug(data.title)
    }))
})

const config = defineConfig({
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      rehypeToc,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeShiftHeading.pluggin, rehypeShiftHeading.options],
      saveCodeTagContentToRaw,
      [rehypePrettyCode.pluggin, rehypePrettyCode.options],
      addRawCodeToPrettyCodeFragment
    ],
    remarkPlugins: [remarkBreaks, remarkMath]
  }
})

export default config
