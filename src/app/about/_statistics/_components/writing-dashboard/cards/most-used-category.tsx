import { Icon as PhosphorIcon } from '@phosphor-icons/react'
import {
  FolderOpen,
  TextAlignLeft,
  CompassTool,
  NoteBlank,
  ListBullets
} from '@phosphor-icons/react/dist/ssr'
import { posts } from '#content'

type RowProps = {
  Icon: PhosphorIcon
  title: string
  quantity: number
}
const Row = ({ Icon, quantity, title }: RowProps) => (
  <div className="flex w-full items-center justify-between gap-3">
    <div className="flex items-center gap-3">
      <Icon size="1em" />
      <span>{title}</span>
    </div>
    <span>{quantity}</span>
  </div>
)

function getQuantity(category: string) {
  return posts.filter(post => post.category === category).length
}

export async function MostUsedCategories() {
  const categories = [
    {
      title: 'How To',
      icon: CompassTool,
      number: getQuantity('How To')
    },
    {
      title: 'Article',
      icon: TextAlignLeft,
      number: getQuantity('Article')
    },
    {
      title: 'List',
      icon: ListBullets,
      number: getQuantity('List')
    },
    {
      title: 'Notes',
      icon: NoteBlank,
      number: getQuantity('Notes')
    }
  ].sort((a, b) => b.number - a.number)

  return (
    <div className="flex h-full w-full flex-col justify-center gap-3 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>Most Used Categories</span>
        <FolderOpen size="1em" weight="duotone" />
      </span>
      <div className="flex h-full flex-col justify-around gap-2 text-2xl">
        {categories.map(category => (
          <Row
            key={category.title}
            Icon={category.icon}
            title={category.title}
            quantity={category.number}
          />
        ))}
      </div>
    </div>
  )
}
