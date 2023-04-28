import { Footer } from 'components/Footer'
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
        <div className="pt-36">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
