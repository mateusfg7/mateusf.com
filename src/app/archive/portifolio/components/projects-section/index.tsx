import { allProjects } from 'contentlayer/generated'
import { SectionLayout } from '../section-layout'
import { ProjectCard } from './project-card'

export function ProjectsSection() {
  return (
    <SectionLayout title="Projetos Pessoais" id="projetos">
      <div className="mb-20 w-full">
        <div className="flex flex-wrap justify-center gap-10">
          {allProjects.map(project => (
            <ProjectCard data={project} key={project.title} />
          ))}
        </div>
      </div>
    </SectionLayout>
  )
}
