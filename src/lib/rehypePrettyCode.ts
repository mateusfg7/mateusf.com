import { type Options } from 'rehype-pretty-code'

export const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'github-dark',
    light: 'github-light'
  },
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted-line')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['highlighted-word']
  }
}
