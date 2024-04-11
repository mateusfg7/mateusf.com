import Image from 'next/image'
import { Typewriter } from './typewriter'

import deconstructedRobotBroLight from './deconstructed-robot-bro-light.svg'
import deconstructedRobotBroDark from './deconstructed-robot-bro-dark.svg'

export function MainTitle() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-between">
      <div className="absolute left-36 -z-50 h-64 w-64 bg-[conic-gradient(transparent,rgb(0,0,0))] opacity-15 blur-2xl dark:bg-[conic-gradient(transparent,rgb(255,255,255))]" />

      <div className="absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5 md:hidden">
        <Image
          src={deconstructedRobotBroLight}
          alt="Deconstructed Robot Light"
          className="w-96 object-cover dark:hidden"
        />
        <Image
          src={deconstructedRobotBroDark}
          alt="Deconstructed Robot Dark"
          className="hidden w-96 dark:block"
        />
      </div>
      <div className="flex w-full items-center justify-center gap-12 md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="w-min text-7xl font-bold text-black drop-shadow-2xl dark:text-neutral-50 md:w-max">
            Mateus Felipe,
          </span>
          <span className="flex items-center text-2xl text-neutral-400 md:text-3xl ">
            <Typewriter
              words={[
                'Tech stuff enthusiast',
                'Passionate about philosophy',
                'Nature admirer',
                'Enjoyer of good books',
                'Full stack developer'
              ]}
              cursor
              loop
            />
          </span>
        </div>
        <div className="hidden flex-1 items-center justify-end md:flex">
          <Image
            src={deconstructedRobotBroLight}
            alt="Deconstructed Robot Light"
            className="w-72 dark:hidden"
          />
          <Image
            src={deconstructedRobotBroDark}
            alt="Deconstructed Robot Dark"
            className="hidden w-72 dark:block"
          />
        </div>
      </div>
    </div>
  )
}
