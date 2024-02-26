import { defineConfig } from 'velite'
import { PluggableList } from 'unified'

import { posts } from './content/collections/posts'
import { tils } from './content/collections/tils'
import { projects } from './content/collections/projects'
import { rehypePlugins, remarkPlugins } from './content/plugin'

const config = defineConfig({
  collections: { posts, tils, projects },
  mdx: {
    rehypePlugins: rehypePlugins as PluggableList,
    remarkPlugins: remarkPlugins as PluggableList
  }
})

export default config
