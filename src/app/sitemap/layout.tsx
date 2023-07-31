import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sitemap'
}

export default function SitemapLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <div className="content-vertical-spaces">{children}</div>
}
