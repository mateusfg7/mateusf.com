/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'
import { Project } from './content/definitions/Project'
import { AboutMe } from './content/definitions/AboutMe'
import { remarkPlugins, rehypePlugins } from './content/plugin'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project, AboutMe],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins,
    rehypePlugins: rehypePlugins as unknown as undefined
  }
})
