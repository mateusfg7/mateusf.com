import { ComponentProps } from 'react'

interface Props extends ComponentProps<'h1'> {
  text: string
  description?: string
}

export function Title({ text, description, ...props }: Props) {
  return (
    <div className="mb-8 inline">
      <h1
        {...props}
        className="bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70 md:w-fit md:text-left"
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
