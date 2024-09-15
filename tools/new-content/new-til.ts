import fs from 'fs'
import c from 'picocolors'
import { outro, text, spinner } from '@clack/prompts'

import { slug } from '~/lib/slug'

export async function newTil() {
  const title = await text({
    message: 'Title',
    placeholder: 'Advantages of eating',
    validate(value) {
      if (value.length === 0) return `Value is required!`
    }
  })
  const description = await text({
    message: 'Description',
    placeholder: 'Concise resume of the T.I.L',
    validate(value) {
      if (value.length === 0) return `Value is required!`
    }
  })

  const tags = await text({
    message: 'Tags (separated by ",")',
    placeholder: 'javascript, rust, css, life'
  })

  const s = spinner()

  s.start(c.italic('Creating T.I.L'))

  const padZero = (n: string | number) => (Number(n) < 10 ? `0${n}` : n)

  const currDate = new Date()

  const TIL_DIR_PATH = 'content/til'
  const SLUGGED_TITLE = slug(title.toString()).replaceAll('-', '_')
  const DATE_STR = `${padZero(currDate.getFullYear())}-${padZero(
    currDate.getMonth() + 1
  )}-${padZero(currDate.getDate())}`

  const tilPath = `${TIL_DIR_PATH}/${DATE_STR.replaceAll(
    '-',
    '_'
  )}-${SLUGGED_TITLE}.mdx`

  const parsedTags = tags
    ? tags
        .toString()
        .split(',')
        .map(tag => tag.trim())
        .toString()
    : ''

  fs.writeFile(
    tilPath,
    `---\ntitle: '${title.toString()}'\ndescription: '${description.toString()}'\ndate: '${DATE_STR}'\ntags: [${parsedTags}]\n---`,
    () => {}
  )

  s.stop(c.bold('T.I.L created!'))

  outro(`📝 The T.I.L was saved to ${c.bold(c.green(tilPath))}`)
}
