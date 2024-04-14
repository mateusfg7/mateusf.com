import React from 'react'

type MarqueeProps = {
  children: React.ReactNode
  direction?: 'left' | 'up'
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  className?: string
}

const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start }, (_, k) => k + start)

const Marquee = (props: MarqueeProps) => {
  const {
    children,
    direction = 'left',
    pauseOnHover = false,
    reverse = false,
    fade = false,
    className
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
      className={`group flex flex-col gap-4 overflow-hidden data-[direction="left"]:flex-row ${className}`}
      data-direction={direction}
      data-testid="marquee"
      style={{
        maskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: fade
          ? `linear-gradient(${
              ifToRightOrToBottom(direction)
              // direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
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
            animate-marquee-up data-[direction='left']:animate-marquee-left data-[reverse='true']:direction-reverse flex shrink-0 flex-col justify-around gap-4 [--gap:1rem] data-[direction='left']:flex-row data-[pause-on-hover='true']:group-hover:[animation-play-state:paused]
          "
        >
          {children}
        </div>
      ))}
    </div>
  )
}

const Example = ({ label = 'EX' }: { label?: string }) => (
  <div className="size-5 rounded-md bg-neutral-800 text-neutral-200">
    {label}
  </div>
)

export const StacksCard = () => {
  return (
    <div className="mt-4 flex h-36 flex-col gap-2 overflow-hidden rounded-xl p-1">
      {/* <p className="text-sm font-mono flex justify-center  text-zinc-600 dark:text-zinc-488">
        fun things
      </p> */}
      <Marquee className="" fade pauseOnHover>
        <Example label="Ts" />
        <Example label="Tw" />
        <Example label="Nxt" />
        <Example label="Rct" />
        <Example label="Py" />
        <Example label="Db" />
        <Example label="C++" />

        <Example label="Go" />
        <Example label="Gql" />
      </Marquee>

      <Marquee className="mt-2" reverse fade pauseOnHover>
        <Example label="Ex" />
        <Example label="Dck" />
        <Example label="Arc" />
        <Example label="Dot" />

        <Example label="Prs" />
        <Example label="Sql" />
        <Example label="Fir" />
        <Example label="Fig" />
        <Example label="Git" />
        <Example label="Vit" />
        <Example label="Cld" />
        <Example label="Jst" />
        <Example label="Nde" />
      </Marquee>
    </div>
  )
}
