import { Introduction } from './introduction'
import { MakingCard } from './making-card'

export function AboutMe() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:gap-3">
      <Introduction />
      <div className="relative">
        <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
          <MakingCard />
        </div>
      </div>
    </div>
  )
}
