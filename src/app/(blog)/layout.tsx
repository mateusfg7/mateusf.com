import { Header } from 'components/Header'

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        <div className="py-48 md:py-36">{children}</div>
      </body>
    </html>
  )
}
