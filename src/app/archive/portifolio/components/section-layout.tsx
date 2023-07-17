import { ReactNode } from 'react'

interface Props {
  title: string
  id: string
  children: ReactNode
}

export function SectionLayout({ title, id, children }: Props) {
  return (
    <div id={id} className="flex min-h-screen justify-center py-14 pt-28">
      <div className="portifolio-content-w">
        <div className="mb-20 w-full text-center">
          <h1 className="text-4xl font-bold text-blue-500">{title}</h1>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  )
}
