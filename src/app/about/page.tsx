import { AboutMe } from './sections/about-me'
import { Contact } from './sections/contact'
import { Knowledge } from './sections/knowledge'
import { Dashboard } from './sections/dashboard'

import './styles.css'

export default function Page() {
  return (
    <div className="content-container m-auto space-y-32">
      <AboutMe />
      <Knowledge />
      <Dashboard />
      <Contact />
    </div>
  )
}
