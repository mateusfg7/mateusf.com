import { Project } from 'contentlayer/generated'
import { FiGithub } from 'react-icons/fi'
import { techIcons } from './tech-icons'

interface Props {
  data: Project
}

export function ProjectInfo({ data }: Props) {
  const Title = () => (
    <div className="mb-10 flex flex-col items-center gap-4 text-2xl dark:text-neutral-50 md:mb-4 md:flex-row">
      <h2 className="font-bold">{data.title}</h2>
      <span className="flex items-center gap-2">
        {data.core_techs.map(coreTech => {
          const TechIcon = techIcons[coreTech]
          return (
            <span key={coreTech} className="text-xl hover:cursor-pointer">
              <TechIcon />
            </span>
          )
        })}
      </span>
    </div>
  )
  const Tags = () => (
    <div className="mt-4 hidden flex-wrap items-center gap-2 md:flex">
      {data.tags.map(tag => (
        <span
          key={tag}
          className="rounded-xl bg-neutral-700/10 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-200/10 dark:text-neutral-200"
        >
          {tag}
        </span>
      ))}
    </div>
  )

  return (
    <div className="flex flex-col items-center justify-between gap-12 rounded-3xl bg-gradient-to-r from-neutral-100 to-neutral-100 p-5 shadow-2xl shadow-black/30 transition-all duration-1000 hover:to-[#f9f9f9] dark:from-neutral-900 dark:to-neutral-900 dark:hover:to-[#191919] md:flex-row md:gap-3">
      <div>
        <Title />
        <p className="text-justify md:text-left">{data.description}</p>
        <Tags />
      </div>
      <div>
        <a
          href={data.repository}
          title="Repository"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-2xl border border-[#181717] p-4 text-[#181717] hover:bg-[#181717] hover:text-[#F6F8FA] dark:border-[#F6F8FA] dark:text-[#F6F8FA] dark:hover:bg-[#F6F8FA] hover:dark:text-[#181717] md:text-2xl"
        >
          <span className="md:hidden">Repository</span>
          <FiGithub />
        </a>
      </div>
    </div>
  )
}
