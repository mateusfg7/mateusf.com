import { Footer } from './components/footer'
import { Header } from './components/header'

export default function BlogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Header />
        <div className="pt-24 md:pt-36">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
