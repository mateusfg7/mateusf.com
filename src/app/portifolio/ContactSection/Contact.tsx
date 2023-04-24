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
    <div className="flex items-center text-xl text-neutral-200 border-b border-b-neutral-800 last:border-none">
      <div
        className="flex items-center gap-2 w-40 text-2xl h-full mr-7"
        style={{
          color
        }}
      >
        <Icon weight="duotone" />
        <span>{title}</span>
      </div>
      <div className="w-72 flex items-center h-full mr-20">
        <span>{data}</span>
      </div>
      <div
        className="group hover:cursor-pointer flex items-center text-3xl py-6"
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
