/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import { Project } from './content/definitions/Project'
import { remarkPlugins, rehypePlugins } from './content/plugin'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins,
    rehypePlugins: rehypePlugins as unknown as undefined
  }
})
