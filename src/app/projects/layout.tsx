import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'My personal portfolio with the main active and inactive projects, websites, apps, etc.',
  keywords: ['projects', 'portfolio', 'programming', 'softwares', 'apps']
}

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
