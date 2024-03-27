import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import { projects } from '#content'

import { Title } from '~/components/title'
import { ProjectCard } from './_components/project-card'

export default function Page() {
  const featuredProjects = projects
    .filter(project => project.featured)
    .sort((a, b) => a.priority - b.priority)
  const otherProjectsWithImage = projects
    .filter(project => !project.featured && project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))
  const otherProjectsWithoutImage = projects
    .filter(project => !project.featured && !project.image)
    .sort((a, b) => Number(a.priority) - Number(b.priority))

  return (
    <div className="content-container m-auto space-y-8">
      <Title text="Projects" />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {featuredProjects.length > 0 &&
          featuredProjects.map(project => (
            <ProjectCard data={project} key={project.slug} />
          ))}
        {otherProjectsWithImage.length > 0 &&
          otherProjectsWithImage.map(project => (
            <ProjectCard data={project} key={project.slug} />
          ))}
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {otherProjectsWithoutImage.length > 0 &&
          otherProjectsWithoutImage.map(project => (
            <ProjectCard data={project} variant="compact" key={project.slug} />
          ))}
      </div>
      <div className="flex justify-center md:justify-end">
        <a
          href="https://github.com/mateusfg7/?tab=repositories&ref=https://mateusf.com"
          target="_blank"
          className="flex items-end gap-px leading-none opacity-70 transition-opacity hover:opacity-100"
        >
          <span>more projects</span>
          <ArrowUpRight className="text-sm" size="1em" />
        </a>
      </div>
    </div>
  )
}
