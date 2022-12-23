import { FiFolder, FiGithub, FiGlobe } from 'react-icons/fi'
import { ProjectData } from './projects'
import { BsDot } from 'react-icons/bs'

interface Props {
  data: ProjectData
}

export function ProjectCard({ data }: Props) {
  return (
    <div className="bg-neutral-900 shadow-2xl shadow-black/30  flex flex-col w-[30rem] rounded-3xl overflow-hidden">
      {data.image && (
        <div className="h-56 w-full">
          <img
            src={data.image}
            alt="Project image"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        <div>
          <div className="flex flex-col md:flex-row items-center gap-5 text-2xl text-neutral-50 mb-10 md:mb-4">
            <h2 className="font-bold">{data.title}</h2>
            <span className="hidden md:inline">
              <BsDot />
            </span>
            <span className="flex items-center gap-3">
              {data.core_techs.map(coreTech => {
                const TechIcon = coreTech.icon
                return (
                  <span
                    key={coreTech.key}
                    className="text-xl hover:cursor-pointer"
                  >
                    <TechIcon />
                  </span>
                )
              })}
            </span>
          </div>
          <p className="text-justify md:text-left">{data.description}</p>
          <div className="mt-10 md:mt-4 flex flex-wrap items-center justify-center md:justify-start gap-2">
            {data.tags.map(tag => (
              <span
                key={tag}
                className="text-blue-400 bg-blue-400/5 p-1 rounded-xl"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-9 flex flex-1 items-end justify-center gap-6">
          {data.repository && (
            <>
              <a
                href={data.repository}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-500 hover:text-neutral-50 border border-blue-500 hover:bg-blue-500 rounded-2xl p-4"
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
                className="flex items-center gap-2 text-blue-500 hover:text-neutral-50 border border-blue-500 hover:bg-blue-500 rounded-2xl p-4"
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
                className="flex items-center gap-2 text-blue-500 hover:text-neutral-50 border border-blue-500 bg-blue-500/10 hover:bg-blue-500 rounded-2xl p-4"
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
