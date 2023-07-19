import {
  ArrowSquareOut,
  Icon as IconType
} from '@/shared/wrappers/phosphor-icons'

export const Contact: React.FC<{
  title: string
  data: string
  color: string
  link: string
  Icon: IconType
}> = ({ title, Icon, data, color, link }) => {
  return (
    <div className="flex items-center gap-5 border-b border-b-neutral-800 py-3 text-xl text-neutral-200 last:border-none md:gap-10 md:p-0">
      <div className="flex flex-1 flex-col md:flex-row md:items-center md:gap-7">
        <div
          className="flex h-full items-center gap-2 text-2xl md:w-40"
          style={{
            color
          }}
        >
          <Icon weight="duotone" />
          <span>{title}</span>
        </div>
        <div className="flex h-full items-center text-neutral-400">{data}</div>
      </div>
      <div className="flex items-center py-6 text-3xl hover:cursor-pointer">
        <a href={link} target="_blank" rel="noreferrer">
          <ArrowSquareOut
            className="text-neutral-400 hover:text-neutral-200"
            weight="duotone"
          />
        </a>
      </div>
    </div>
  )
}
