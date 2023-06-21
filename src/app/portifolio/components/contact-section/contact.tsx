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
    <div className="flex items-center border-b border-b-neutral-800 text-xl text-neutral-200 last:border-none gap-5 md:gap-10 py-3 md:p-0">
      <div className='flex-1 flex md:items-center flex-col md:flex-row md:gap-7'>
        <div
          className="flex h-full md:w-40 items-center gap-2 text-2xl"
          style={{
            color
          }}
        >
          <Icon weight="duotone" />
          <span>{title}</span>
        </div>
        <div className="flex md:w-72 h-full items-center text-neutral-400">
          <span>{data}</span>
        </div>
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
