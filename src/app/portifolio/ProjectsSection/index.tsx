import { SectionLayout } from '../SectionLayout'
import { ProjectCard } from './ProjectCard'

import { devProjects, civilProjects } from './projects'

export function ProjectsSection() {
  return (
    <SectionLayout title="Projetos Pessoais" id="projetos">
      <div className="w-full mb-20">
        <div className="w-full text-center mb-12">
          <h2 className="text-neutral-50 text-3xl">Programação</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          {devProjects.map(project => (
            <ProjectCard data={project} key={project.title} />
          ))}
        </div>
      </div>
      <div className="w-full mb-20">
        <div className="w-full text-center mb-12">
          <h2 className="text-neutral-50 text-3xl">Edificações</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-10">
          {civilProjects.map(project => (
            <ProjectCard data={project} key={project.title} />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
