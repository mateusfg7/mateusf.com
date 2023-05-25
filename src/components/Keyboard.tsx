import { DetailedHTMLProps, HTMLAttributes } from 'react'

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  keys: string[]
}

export const Keyboard = ({ keys, className, ...rest }: Props) => (
  <kbd
    className={`flex gap-2 rounded-lg border border-neutral-200 bg-neutral-100 p-1 text-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 ${className}`}
    {...rest}
  >
    {keys.map(key => (
      <span key={key}>{key}</span>
    ))}
  </kbd>
)
