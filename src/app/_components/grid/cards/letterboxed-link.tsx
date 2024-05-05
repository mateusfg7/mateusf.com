import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

export function LetterboxedLink() {
  return (
    <a
      href="https://letterboxd.com/mateusfg7/"
      target="_blank"
      className="relative flex h-full transform-gpu flex-col justify-between rounded-xl bg-[#131618] p-3 duration-500 hover:scale-[.97]"
    >
      <span className="flex justify-end text-lg text-neutral-200">
        <ArrowUpRight weight="bold" size="1em" />
      </span>

      <div className="absolute bottom-3 z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent blur-md">
        <span>Letter</span>
        <span>boxed</span>
      </div>

      <div className="absolute bottom-[3.75rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.10]">
        <span>Letter</span>
        <span>boxed</span>
      </div>

      <div className="absolute bottom-[3rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.15]">
        <span>Letter</span>
        <span>boxed</span>
      </div>

      <div className="absolute bottom-[2.25rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.20]">
        <span>Letter</span>
        <span>boxed</span>
      </div>

      <div className="absolute bottom-[1.5rem] z-10 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent opacity-[0.25]">
        <span>Letter</span>
        <span>boxed</span>
      </div>

      <div className="z-20 flex flex-col gap-px bg-gradient-to-r from-[#FF8000] via-[#00E054] to-[#40BCF4] bg-clip-text text-xl font-bold leading-none text-transparent">
        <span>Letter</span>
        <span>boxed</span>
      </div>
    </a>
  )
}
