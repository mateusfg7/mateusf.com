import { SectionLayout } from '../section-layout'
import { ProjectCard } from './project-card'

import { devProjects, civilProjects } from './projects'

export function ProjectsSection() {
  return (
    <SectionLayout title="Projetos Pessoais" id="projetos">
      <div className="mb-20 w-full">
        <div className="mb-12 w-full text-center">
          <h2 className="text-3xl text-neutral-50">Programação</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {devProjects.map(project => (
            <ProjectCard data={project} key={project.title} />
          ))}
        </div>
      </div>
      <div className="mb-20 w-full">
        <div className="mb-12 w-full text-center">
          <h2 className="text-3xl text-neutral-50">Edificações</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {civilProjects.map(project => (
            <ProjectCard data={project} key={project.title} />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
