import fs from 'fs'
import c from 'picocolors'
import { outro, text, select, spinner } from '@clack/prompts'

import { slug } from '~/lib/slug'

export async function newPost() {
  const title = await text({
    message: 'Title',
    placeholder: 'Advantages of eating',
    validate(value) {
      if (value.length === 0) return `Value is required!`
    }
  })
  const description = await text({
    message: 'Description',
    placeholder: 'Concise resume of the post',
    validate(value) {
      if (value.length === 0) return `Value is required!`
    }
  })
  const category = await select({
    message: 'Category',
    options: [
      { value: 'Article', label: 'Article' },
      { value: 'How To', label: 'How To' },
      { value: 'List', label: 'List' },
      { value: 'Notes', label: 'Notes' }
    ]
  })
  const tags = await text({
    message: 'Tags (separated by ",")',
    placeholder: 'javascript, rust, css, life'
  })
  const status = await select({
    message: 'Initial status',
    options: [
      { value: 'draft', label: 'Draft' },
      { value: 'planned', label: 'Planned' }
    ]
  })

  const s = spinner()

  s.start(c.italic('Creating post'))

  const CONTENT_DIR_PATH = 'content/posts'
  const SLUGGED_TITLE = slug(title.toString())

  let postPath: string

  fs.mkdirSync(`${CONTENT_DIR_PATH}/${SLUGGED_TITLE}/assets`, {
    recursive: true
  })
  postPath = `${CONTENT_DIR_PATH}/${SLUGGED_TITLE}/${SLUGGED_TITLE}.mdx`

  const parsedTags = tags
    ? tags
        .toString()
        .split(',')
        .map(tag => tag.trim())
        .toString()
    : ''

  fs.writeFile(
    postPath,
    `---\ntitle: '${title.toString()}'\ndate: '${new Date().toISOString()}'\ndescription: '${description.toString()}'\ncategory: '${category}'\ntags: '${parsedTags}'\nstatus: '${status}'\n---`,
    () => {}
  )

  s.stop(c.bold('Post created!'))

  outro(`📝 The post was saved to ${c.bold(c.green(postPath))}`)
}
