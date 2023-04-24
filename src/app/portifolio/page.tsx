'use client'

import { useEffect, useState } from 'react'
import Head from 'next/head'

import { Header } from './Header'
import { HomeSection } from './HomeSection'
import { AboutSection } from './AboutSection'
import { ProjectsSection } from './ProjectsSection'
import { KnowledgeSection } from './KnowledgeSection'
import { ContactSection } from './ContactSection'

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScrollValue, setMaxScrollValue] = useState(0)

  function updateScrollPosition() {
    if (window) {
      setScrollPosition(window.scrollY)
    }
  }
  function updateMaxScrollValue() {
    if (document) {
      setMaxScrollValue(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      )
    }
  }
  function handleScroll() {
    updateScrollPosition()
    updateMaxScrollValue()
  }

  useEffect(() => {
    updateScrollPosition()
    updateMaxScrollValue()

    if (window) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }, [])

  return (
    <div className="bg-neutral-1000 text-neutral-300" id="portifolio">
      <Head>
        <title>Portifólio | Mateus Felipe Gonçalves</title>
      </Head>
      <Header scrollPosition={scrollPosition} maxScrollValue={maxScrollValue} />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <KnowledgeSection />
      <ContactSection />
    </div>
  )
}
