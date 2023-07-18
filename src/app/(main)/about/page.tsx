import { Metadata } from 'next'
import { AboutMe } from './sections/about-me'
import './styles.css'

export const metadata: Metadata = {}

export default function Page() {
  return (
    <div className="blog-content-w m-auto">
      <AboutMe />
    </div>
  )
}
