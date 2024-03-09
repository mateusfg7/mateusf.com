import Image from 'next/image'

import { Typewriter } from './_components/typewriter'
import { StartButton } from './_components/start-button'

import deconstructedRobotBroLight from './_components/deconstructed-robot-bro-light.svg'
import deconstructedRobotBroDark from './_components/deconstructed-robot-bro-dark.svg'

export default function Page() {
  return (
    <div className="content-container relative m-auto mb-10 flex min-h-screen flex-col items-center justify-between py-10">
      <div className="absolute h-full w-full bg-[url(/assets/deconstructed-robot-bro.svg)] bg-fixed bg-center bg-no-repeat opacity-10 dark:opacity-5 md:hidden" />
      <div />
      <div className="flex w-full items-center justify-center gap-12 md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="w-min text-7xl font-bold text-black dark:text-neutral-50 md:w-max">
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
      <StartButton />
    </div>
  )
}
