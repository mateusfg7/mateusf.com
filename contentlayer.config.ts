/* eslint-disable no-void */
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import remarkBreaks from 'remark-breaks'
import remarkHint from 'remark-hint'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeKatex from 'rehype-katex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiftHeading from 'rehype-shift-heading'

import { spawn } from 'node:child_process'
import { makeSource } from 'contentlayer/source-remote-files'

import { Post } from './content/definitions/Post'
import {
  rehypePrettyCodeOptions,
  rehypeAutolinkHeadingsOptions,
  rehypeShiftHeadingOptions
} from './content/plugin'

const syncContentFromGit = async (contentDir: string) => {
  const syncRun = async () => {
    const gitUrl = 'https://github.com/mateusfg7/_mfg-b_articles'
    await runBashCommand(`
      if [ -d  "${contentDir}" ];
        then
          cd "${contentDir}"; git pull;
        else
          git clone --depth 1 --single-branch ${gitUrl} ${contentDir}/posts;
      fi
    `)
  }

  let wasCancelled = false
  let syncInterval

  const syncLoop = async () => {
    console.log('Syncing content files from git')

    await syncRun()

    if (wasCancelled) return

    syncInterval = setTimeout(syncLoop, 1000 * 60)
  }

  // Block until the first sync is done
  await syncLoop()

  return () => {
    wasCancelled = true
    clearTimeout(syncInterval)
  }
}

const runBashCommand = (command: string) =>
  new Promise((resolve, reject) => {
    const child = spawn(command, [], { shell: true })

    child.stdout.setEncoding('utf8')
    child.stdout.on('data', data => process.stdout.write(data))

    child.stderr.setEncoding('utf8')
    child.stderr.on('data', data => process.stderr.write(data))

    child.on('close', function (code) {
      if (code === 0) {
        resolve(void 0)
      } else {
        reject(new Error(`Command failed with exit code ${code}`))
      }
    })
  })

export default makeSource({
  syncFiles: syncContentFromGit,
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath, remarkBreaks, remarkHint],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
      rehypeSlug,
      rehypeToc,
      rehypeKatex,
      [rehypeAutolinkHeadings, rehypeAutolinkHeadingsOptions],
      [rehypeShiftHeading, rehypeShiftHeadingOptions]
    ]
  }
})
