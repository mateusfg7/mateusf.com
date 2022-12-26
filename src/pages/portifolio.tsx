import Head from 'next/head'
import { useEffect, useState } from 'react'
import { AboutSection } from 'src/components/portifolio/AboutSection'
import { ContactSection } from 'src/components/portifolio/ContactSection'
import { Header } from 'src/components/portifolio/Header'
import { HomeSection } from 'src/components/portifolio/HomeSection'
import { KnowledgeSection } from 'src/components/portifolio/KnowledgeSection'
import { ProjectsSection } from 'src/components/portifolio/ProjectsSection'

function Portifolio() {
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

export default Portifolio
