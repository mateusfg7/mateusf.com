import { useState } from 'react'
import { ArrowSquareOut, Icon as IconType } from '@phosphor-icons/react'

export const Contact: React.FC<{
  title: string
  data: string
  color: string
  link: string
  Icon: IconType
}> = ({ title, Icon, data, color, link }) => {
  const [isHover, setIsHover] = useState(false)

  return (
    <div className="flex items-center border-b border-b-neutral-800 text-xl text-neutral-200 last:border-none">
      <div
        className="mr-7 flex h-full w-40 items-center gap-2 text-2xl"
        style={{
          color
        }}
      >
        <Icon weight="duotone" />
        <span>{title}</span>
      </div>
      <div className="mr-20 flex h-full w-72 items-center">
        <span>{data}</span>
      </div>
      <div
        className="group flex items-center py-6 text-3xl hover:cursor-pointer"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <a href={link} target="_blank" rel="noreferrer">
          <ArrowSquareOut
            color={isHover ? color : 'rgb(229 229 229)'}
            weight={isHover ? 'bold' : 'regular'}
          />
        </a>
      </div>
    </div>
  )
}
