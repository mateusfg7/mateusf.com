import { ReactNode } from 'react'
import { CopyButton } from './copy-button'

interface Props {
  children: ReactNode
}

export function PrettyCodeElement({ children, ...props }: Props) {
  if (!('data-rehype-pretty-code-figure' in props))
    return <figure {...props}>{children}</figure>
  if (!('raw' in props)) return <figure {...props}>{children}</figure>

  const raw = props.raw as string

  return (
    <figure {...props} className="relative">
      {children}
      <CopyButton text={raw} />
    </figure>
  )
}
