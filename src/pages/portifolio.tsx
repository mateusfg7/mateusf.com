import { AboutSection } from 'src/components/portifolio/AboutSection'
import { ContactSection } from 'src/components/portifolio/ContactSection'
import { Header } from 'src/components/portifolio/Header'
import { HomeSection } from 'src/components/portifolio/HomeSection'
import { KnowledgeSection } from 'src/components/portifolio/KnowledgeSection'
import { ProjectsSection } from 'src/components/portifolio/ProjectsSection'

function Portifolio() {
  return (
    <div className="bg-neutral-1000 text-neutral-300">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <KnowledgeSection />
      <ContactSection />
    </div>
  )
}

export default Portifolio
