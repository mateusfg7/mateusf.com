import plugin, { RehypeMermaidOptions } from 'rehype-mermaidjs'

const options: RehypeMermaidOptions = {
  mermaidConfig: {
    theme: 'neutral'
  }
}

const rehypeMermaid = { plugin, options }

export default rehypeMermaid
