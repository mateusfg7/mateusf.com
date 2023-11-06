import { ReactNode } from 'react'

type CardProps = {
  title: string
  content: string | ReactNode
  icon?: ReactNode
}

export function Card({ content, title, icon }: CardProps) {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>{title}</span>
        {icon && icon}
      </span>
      <span className="text-xl">{content}</span>
    </div>
  )
}
