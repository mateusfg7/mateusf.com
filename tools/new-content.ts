import { intro, select } from '@clack/prompts'
import c from 'picocolors'

import { newPost } from './new-content/new-post'
import { newTil } from './new-content/new-til'

async function main() {
  intro(c.bgGreen(c.bold(' Create new content ')))

  const content = await select({
    message: 'What type of content do you want to create?',
    options: [
      { value: 'post', label: 'New post' },
      { value: 'til', label: 'Today I Learned...' }
    ]
  })

  switch (content) {
    case 'post':
      newPost()
      break
    case 'til':
      newTil()
      break

    default:
      break
  }
}

main()
