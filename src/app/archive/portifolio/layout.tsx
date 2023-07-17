import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'List of my projects and sills'
}

export default function PortfolioLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
