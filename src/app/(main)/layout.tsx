import { Footer } from './components/footer'
import { Header } from './components/header'

export default function MainLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}
