import { ProjectData } from './projects'

interface Props {
  data: ProjectData
}

export function ProjectCard({ data }: Props) {
  return (
    <div className="bg-neutral-900 shadow-2xl shadow-black/30 w-[30rem] rounded-3xl overflow-hidden">
      {data.image && (
        <div className="h-56 w-full">
          <img
            src={data.image}
            alt="Project image"
            className="h-full w-full object-cover object-top"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-5 text-2xl text-neutral-50 mb-4">
          <h2 className="font-bold">{data.title}</h2>
          <span>°</span>
          <span className="flex items-center gap-2 ">
            {data.core_techs.map(coreTech => {
              const TechIcon = coreTech.icon
              return <TechIcon key={coreTech.key} />
            })}
          </span>
        </div>
        <p>{data.description}</p>
        <div className="my-4 flex flex-wrap items-center gap-2">
          {data.tags.map(tag => (
            <span
              key={tag}
              className="text-blue-400 bg-blue-400/5 p-1 rounded-xl"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-9 flex items-center justify-center gap-6">
          {data.repository && (
            <>
              <a
                href={data.repository}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-neutral-50 border border-blue-500 hover:bg-blue-500 rounded-2xl p-4"
              >
                Repositório [X]
              </a>
            </>
          )}
          {data.files && (
            <>
              <a
                href={data.files}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-neutral-50 border border-blue-500 hover:bg-blue-500 rounded-2xl p-4"
              >
                Arquivos [X]
              </a>
            </>
          )}
          {data.website && (
            <>
              <a
                href={data.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:text-neutral-50 border border-blue-500 bg-blue-500/10 hover:bg-blue-500 rounded-2xl p-4"
              >
                Website [X]
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
