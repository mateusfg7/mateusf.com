import Image from 'next/image'
import { FiFolder, FiGithub, FiGlobe } from 'react-icons/fi'
import { BsDot } from 'react-icons/bs'
import { ProjectData, techIcons } from './projects'

interface Props {
  data: ProjectData
}

export function ProjectCard({ data }: Props) {
  const Title = () => (
    <div className="mb-10 flex flex-col items-center gap-5 text-2xl text-neutral-50 md:mb-4 md:flex-row">
      <h2 className="font-bold">{data.title}</h2>
      <span className="hidden md:inline">
        <BsDot />
      </span>
      <span className="flex items-center gap-3">
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
    <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:mt-4 md:justify-start">
      {data.tags.map(tag => (
        <span
          key={tag}
          className="rounded-xl bg-blue-400/5 py-1 px-2 text-blue-400"
        >
          {tag}
        </span>
      ))}
    </div>
  )

  return (
    <div className="flex w-[30rem] flex-col  overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl shadow-black/30">
      {data.image && (
        <div className="h-56 w-full">
          <Image
            src={data.image}
            width={2700}
            height={2025}
            alt="Project image"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div>
          <Title />
          <p className="text-justify md:text-left">{data.description}</p>
          <Tags />
        </div>
        <div className="mt-9 flex flex-1 items-end justify-center gap-6">
          {data.repository && (
            <>
              <a
                href={data.repository}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-blue-500 p-4 text-blue-500 hover:bg-blue-500 hover:text-neutral-50"
              >
                Repositório <FiGithub />
              </a>
            </>
          )}
          {data.files && (
            <>
              <a
                href={data.files}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-blue-500 p-4 text-blue-500 hover:bg-blue-500 hover:text-neutral-50"
              >
                Arquivos <FiFolder />
              </a>
            </>
          )}
          {data.website && (
            <>
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-2xl border border-blue-500 bg-blue-500/10 p-4 text-blue-500 hover:bg-blue-500 hover:text-neutral-50"
              >
                Website <FiGlobe />
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
