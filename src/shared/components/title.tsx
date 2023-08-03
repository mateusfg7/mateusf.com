import { ComponentProps } from 'react'

interface Props extends ComponentProps<'h1'> {
  text: string
}

export function Title({ text, ...props }: Props) {
  return (
    <h1
      {...props}
      className="mb-8 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/70 bg-clip-text text-center text-4xl font-semibold text-transparent dark:from-neutral-300 dark:via-neutral-300/90 dark:to-neutral-300/70 md:w-fit md:text-left"
    >
      {text}
    </h1>
  )
}
