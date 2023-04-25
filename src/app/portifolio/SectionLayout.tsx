import { ReactNode } from 'react'

interface Props {
  title: string
  id: string
  children: ReactNode
}

export function SectionLayout({ title, id, children }: Props) {
  return (
    <div id={id} className="min-h-screen flex justify-center py-14 pt-28">
      <div className="content-w">
        <div className="w-full text-center mb-20">
          <h1 className="text-blue-500 text-4xl font-bold">{title}</h1>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
