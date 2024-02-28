import { readFileSync } from 'fs'
import plugin, { Options } from 'rehype-pretty-code'
import { getHighlighter } from 'shiki'

const options: Partial<Options> = {
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
  getHighlighter: options =>
    getHighlighter({
      ...options,
      langs: [
        () =>
          JSON.parse(
            readFileSync(
              './content/plugin/rehype-pretty-code/visualg.tmLanguage.json',
              'utf-8'
            )
          ),
        () =>
          JSON.parse(
            readFileSync(
              './content/plugin/rehype-pretty-code/birl.tmLanguage.json',
              'utf-8'
            )
          )
      ],
      langAlias: {
        visualg: 'VisuAlg',
        birl: 'BIRL'
      }
    })
}

const rehypePrettyCode = [plugin, options]
export default rehypePrettyCode
