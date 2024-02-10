import { ComponentProps } from 'react'

interface Props extends ComponentProps<'h1'> {
  text: string
  description?: string | React.ReactNode
}

export function Title({ text, description, ...props }: Props) {
  return (
    <div className="flex flex-col items-center md:items-start">
      <h1
        {...props}
        className="w-fit bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-4xl font-semibold text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70"
      >
        {text}
      </h1>
      {description && (
        <span className="text-xs text-neutral-400 dark:text-neutral-600">
          {description}
        </span>
      )}
    </div>
  )
}
