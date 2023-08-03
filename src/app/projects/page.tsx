import { Title } from '@/shared/components/title'

import { allProjects } from 'contentlayer/generated'
import { ProjectCard } from './components/project-card'
import { ProjectInfo } from './components/project-info'

export default function Page() {
  const featuredProjects = allProjects
    .filter(project => project.featured)
    .sort((a, b) => Number(a.priority) - Number(b.priority))
  const otherProjectsWithImage = allProjects
    .filter(project => !project.featured && project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))
  const otherProjectsWithoutImage = allProjects
    .filter(project => !project.featured && !project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))

  return (
    <div className="content-container m-auto space-y-8">
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.length > 0 &&
          featuredProjects.map(project => (
            <ProjectCard data={project} key={project._id} />
          ))}
        {otherProjectsWithImage.length > 0 &&
          otherProjectsWithImage.map(project => (
            <ProjectCard data={project} key={project._id} />
          ))}
      </div>
      <div className="space-y-6">
        {otherProjectsWithoutImage.length > 0 &&
          otherProjectsWithoutImage.map(project => (
            <ProjectInfo data={project} key={project._id} />
          ))}
      </div>
    </div>
  )
}
