import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'My personal posts and thoughts about all kind of stuff that I like. Main philosophic and technical text.',
  keywords: [
    'blog',
    'thoughts',
    'texts',
    'technical',
    'tutorials',
    'posts',
    'phisolophy'
  ]
}

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
