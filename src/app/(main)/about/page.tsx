import { AboutMe } from './sections/about-me'
import { Knowledge } from './sections/knowledge'

import './styles.css'

export default function Page() {
  return (
    <div className="blog-content-w m-auto space-y-40">
      <AboutMe />
      <Knowledge />
    </div>
  )
}
