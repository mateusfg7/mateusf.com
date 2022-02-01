import React from 'react'

import { unified } from 'unified'
import markdown from 'remark-parse'
import rehypeHighlight from 'rehype-highlight'
import math from 'remark-math'
import katex from 'rehype-katex'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import gfm from 'remark-gfm'
import toc from 'rehype-toc'
import slug from 'rehype-slug'
import rehypeRaw from 'rehype-raw'

import elixir from 'highlight.js/lib/languages/elixir'
import vim from 'highlight.js/lib/languages/vim'
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import bash from 'highlight.js/lib/languages/bash'
import python from 'highlight.js/lib/languages/python'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import plaintext from 'highlight.js/lib/languages/plaintext'
import sql from 'highlight.js/lib/languages/sql'

export function unifiedContentProcessor(contentToProcess: string) {
  const highlightLanguages = {
    elixir,
    vim,
    typescript,
    javascript,
    bash,
    python,
    css,
    xml,
    plaintext,
    sql
  }

  const contentProcessor = unified()
    .use(markdown)
    .use(gfm)
    .use(math)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight, { languages: highlightLanguages })
    .use(katex)
    .use(slug)
    .use(toc)
    .use(rehype2react, { createElement: React.createElement })

  return contentProcessor.processSync(contentToProcess).result
}
