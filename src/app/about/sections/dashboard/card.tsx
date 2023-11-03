import { ReactNode } from 'react'

type CardProps = {
  title: string
  content: string | ReactNode
}

export function Card({ content, title }: CardProps) {
  return (
    <div className="flex flex-col justify-center gap-2 rounded-3xl bg-neutral-200 p-4 leading-none dark:bg-neutral-950 md:p-7">
      <span className="text-neutral-600">{title}</span>
      <span className="text-xl">{content}</span>
    </div>
  )
}
