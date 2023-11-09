import { ReactNode } from 'react'

type CardProps = {
  title: string
  content: string | ReactNode
  icon?: ReactNode
}

export function Card({ content, title, icon }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-neutral-200 p-5 leading-none dark:bg-neutral-950 md:p-7 lg:items-start lg:gap-2">
      <span className="inline-flex items-center gap-2 text-neutral-600">
        <span>{title}</span>
        {icon && icon}
      </span>
      <div className="flex w-full justify-center text-xl lg:justify-start">
        {content}
      </div>
    </div>
  )
}
