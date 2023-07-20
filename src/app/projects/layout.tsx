import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My personal projects and apps'
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
