import { ReactNode } from 'react'
import { CopyButton } from './copy-button'

interface Props {
  children: ReactNode
}

export function PrettyCodeElement({ children, ...props }: Props) {
  if (!('data-rehype-pretty-code-fragment' in props))
    return <div {...props}>{children}</div>
  if (!('raw' in props)) return <div {...props}>{children}</div>

  const raw = props.raw as string

  return (
    <div {...props} className="relative">
      {children}
      <CopyButton text={raw} />
    </div>
  )
}
