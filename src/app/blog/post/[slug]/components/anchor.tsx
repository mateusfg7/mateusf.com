import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'

interface Props
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: ReactNode
}

export function Anchor({ children, href, ...props }: Props) {
  return (
    <a className="inline-flex items-center gap-1" href={href} {...props}>
      {children} <ArrowSquareOut size="1em" />
    </a>
  )
}
