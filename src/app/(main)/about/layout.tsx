import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Who I am, what I know and where I am...'
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
