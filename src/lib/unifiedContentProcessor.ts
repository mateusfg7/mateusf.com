import React from 'react'

import { unified } from 'unified'

import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remark2rehype from 'remark-rehype'

import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehype2react from 'rehype-react'

import elixir from 'highlight.js/lib/languages/elixir.js'

export function unifiedContentProcessor(contentToProcess: string) {
  const contentProcessor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { languages: { elixir } })
    .use(rehypeKatex)
    .use(rehypeSlug)
    .use(rehypeToc)
    .use(rehype2react, { createElement: React.createElement })

  return contentProcessor.processSync(contentToProcess).result
}
