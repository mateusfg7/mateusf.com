import { Metadata } from 'next'

import { AboutMe } from './sections/about-me'
import { Contact } from './sections/contact'
import { Knowledge } from './sections/knowledge'
import { StatisticsGrid } from './sections/statistics'
import { Experience } from './sections/experience'
import { Educational } from './sections/educational'

import './styles.css'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Information about who is Mateus Felipe, my knowledge, statistics about me and social links.',
  keywords: ['about', 'social', 'links', 'knowledge']
}

export const revalidate = 3600 // 1h

export default function Page() {
  return (
    <div className="content-container m-auto space-y-32">
      <AboutMe />
      <StatisticsGrid />
      <Knowledge />
      <Experience />
      <Educational />
      <Contact />
    </div>
  )
}
