import { unified } from 'unified'

import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkBreaks from 'remark-breaks'
import remarkHint from 'remark-hint'
import rehypeKatex from 'rehype-katex'

import rehypeMermaid from 'content/plugin/rehype-mermaid'

export function markdownToHtml(markdown: string) {
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkBreaks)
    .use(remarkHint)
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeStringify)
    .use([rehypeMermaid.plugin, rehypeMermaid.options])
    .processSync(markdown)

  return String(file)
}
