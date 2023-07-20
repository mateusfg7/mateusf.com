import Image from 'next/image'

import { Typewriter } from './components/typewriter'
import { StartButton } from './components/start-button'
import codeTyping from './components/code-type.svg'

export default function Page() {
  return (
    <div className="blog-content-w relative m-auto mb-10 flex min-h-screen flex-col items-center justify-between py-10">
      <div className="absolute h-full w-full bg-[url(/assets/code-type.svg)] bg-fixed bg-center bg-no-repeat opacity-10 md:hidden" />
      <div />
      <div className="flex w-full items-center justify-center gap-12 md:justify-between">
        <div className="flex flex-col gap-4">
          <span className="w-min text-7xl font-bold text-neutral-800 dark:text-neutral-50 md:w-max">
            Mateus Felipe,
          </span>
          <span className="flex items-center text-2xl text-neutral-400 md:text-3xl ">
            <Typewriter
              words={[
                'Front-end developer',
                'Back-end developer',
                'Full stack developer'
              ]}
              cursor
            />
          </span>
        </div>
        <div className="hidden w-64 flex-1 md:block">
          <Image src={codeTyping} alt="Code Typing" className="w-full" />
        </div>
      </div>
      <StartButton />
    </div>
  )
}
