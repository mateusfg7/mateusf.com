import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

import { ArrowSquareOut } from '@/shared/wrappers/phosphor-icons'

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
      {children} <ArrowSquareOut />
    </a>
  )
}
