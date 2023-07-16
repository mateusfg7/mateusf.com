import {
  Header,
  AboutSection,
  ContactSection,
  HomeSection,
  KnowledgeSection,
  ProjectsSection
} from './components'

export default function Page() {
  return (
    <div className="bg-neutral-1000 text-neutral-300" id="portifolio">
      <Header />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <KnowledgeSection />
      <ContactSection />
    </div>
  )
}
