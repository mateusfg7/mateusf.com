/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { Project } from './content/definitions/Project'
import { AboutMe } from './content/definitions/AboutMe'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, AboutMe]
})
