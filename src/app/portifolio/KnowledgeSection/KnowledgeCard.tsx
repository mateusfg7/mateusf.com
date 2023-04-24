import { Knowledge } from './knowledge-categories'

const Info: React.FC<Knowledge> = ({ icon, level, title }) => {
  const Icon = icon

  return (
    <div className="flex text-neutral- gap-2">
      <span className="p-px text-neutral-50 text-xl">
        <Icon />
      </span>
      <span className="flex flex-col gap-1 text-neutral-50">
        <span>{title}</span>
        <span className="text-neutral-400">{level}</span>
      </span>
    </div>
  )
}

export function KnowledgeCard({
  title,
  knowledgeList
}: {
  title: string
  knowledgeList: Knowledge[]
}) {
  return (
    <div className="bg-neutral-900 rounded-3xl p-10 flex flex-col items-center gap-4 shadow-2xl shadow-black/30">
      <h2 className="text-neutral-50 text-xl mb-7 text-center">{title}</h2>
      <div className="w-full h-full flex justify-center">
        <div className="h-full grid grid-cols-2 gap-x-10 gap-y-5">
          {knowledgeList.map(knowledge => (
            <Info
              key={knowledge.title}
              icon={knowledge.icon}
              title={knowledge.title}
              level={knowledge.level}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
