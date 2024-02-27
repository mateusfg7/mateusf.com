import { Article } from '@phosphor-icons/react/dist/ssr'
import { posts } from '#content'

import { Card } from '../card'

export async function BlogPosts() {
  return (
    <Card
      title="Blog posts"
      icon={<Article size="1em" weight="duotone" />}
      content={posts.length}
    />
  )
}
