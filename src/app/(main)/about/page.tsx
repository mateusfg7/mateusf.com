import { AboutMe } from './sections/about-me'
import { Contact } from './sections/contact'
import { Knowledge } from './sections/knowledge'

import './styles.css'

export default function Page() {
  return (
    <div className="blog-content-w m-auto space-y-32">
      <AboutMe />
      <Knowledge />
      <Contact />
    </div>
  )
}
