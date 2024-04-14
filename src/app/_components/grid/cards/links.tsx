import { LinkedinLogo, XLogo } from '@phosphor-icons/react/dist/ssr'

export const LinksCard = () => {
  return (
    <div className="flex gap-2">
      <a
        href="http://linkedin.com/in/mateusfg"
        target="_blank"
        className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#2867b2] text-white duration-500 hover:scale-[.97]"
      >
        <LinkedinLogo size="1em" className="text-2xl" />
        <p className="-rotate-3 text-[12px] text-white/90">
          (serious stuff 😤)
        </p>
      </a>
      <a
        href="http://x.com/mateusfg77"
        target="_blank"
        className="flex h-[4.125rem] w-full transform-gpu flex-col items-center justify-center rounded-lg bg-[#1c1d1f] text-white duration-500 hover:scale-95"
      >
        <XLogo size="1em" className="text-2xl" />
        <p className="text-[12px] text-white/55 ">(share memes ;)</p>
      </a>
    </div>
  )
}
