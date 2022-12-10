import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Container = ({ children }: Props) => {
  return <div className="max-w-4xl p-5 m-auto">{children}</div>
}
