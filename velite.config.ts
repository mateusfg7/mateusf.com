import { defineConfig } from 'velite'
import { PluggableList } from 'unified'

import { posts } from './content/collections/post'
import { rehypePlugins, remarkPlugins } from './content/plugin'

const config = defineConfig({
  collections: { posts },
  mdx: {
    rehypePlugins: rehypePlugins as PluggableList,
    remarkPlugins: remarkPlugins as PluggableList
  }
})

export default config
