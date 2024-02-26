/* eslint-disable no-void */

import { makeSource } from 'contentlayer/source-files'

import { AboutMe } from './content/definitions/AboutMe'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [AboutMe]
})
