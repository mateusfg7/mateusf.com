import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Information about who is Mateus Felipe, my knowledge, statistics about me and social links.',
  keywords: ['about', 'social', 'links', 'knowledge']
}

export const revalidate = 3600 // 3600s = 1h

export default function AboutLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
