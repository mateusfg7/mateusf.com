import React from 'react'
import { stackLines, IconItem } from './stack-icons'

type MarqueeProps = {
  children: React.ReactNode
  direction?: 'left' | 'up'
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
}

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start)

function Marquee(props: MarqueeProps) {
  const {
    children,
    direction = 'left',
    pauseOnHover = false,
    reverse = false,
    fade = false
  } = props

  const ifToRightOrToBottom = (direction: string) => {
    if (direction === 'left') {
      return 'to right'
    } else {
      return 'to bottom'
    }
  }

  return (
    <div
      className='group flex flex-col gap-4 overflow-hidden data-[direction="left"]:flex-row'
      data-direction={direction}
      style={{
        maskImage: fade
          ? `linear-gradient(${ifToRightOrToBottom(
              direction
            )}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${ifToRightOrToBottom(
              direction
            )}, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined
      }}
    >
      {range(0, 2).map(i => (
        <div
          key={i}
          data-direction={direction}
          data-pause-on-hover={pauseOnHover}
          data-reverse={reverse}
          className="
            flex shrink-0 animate-marquee-up flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:animate-marquee-left data-[direction='left']:flex-row data-[reverse='true']:direction-reverse data-[pause-on-hover='true']:group-hover:[animation-play-state:paused]
          "
        >
          {children}
        </div>
      ))}
    </div>
  )
}

const IconElement = ({
  data: { color, icon: Icon, title }
}: {
  data: IconItem
}) => (
  <div
    key={title}
    title={title}
    style={{ color }}
    className="flex items-center justify-center text-4xl"
  >
    <Icon />
  </div>
)

export const StacksCard = () => {
  return (
    <div className="flex h-full flex-col gap-3 overflow-hidden rounded-xl p-1">
      <Marquee fade pauseOnHover>
        {stackLines.top.map(data => (
          <IconElement key={data.title} data={data} />
        ))}
      </Marquee>

      <Marquee reverse fade pauseOnHover>
        {stackLines.bottom.map(data => (
          <IconElement key={data.title} data={data} />
        ))}
      </Marquee>
    </div>
  )
}
