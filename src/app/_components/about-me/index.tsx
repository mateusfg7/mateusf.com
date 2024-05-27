import { Introduction } from './introduction'
import { MakingCard } from './making-card'

export function AboutMe() {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <Introduction />
      <div className="relative">
        <div className="h-fit md:sticky md:top-24 md:w-[23rem]">
          <MakingCard />
        </div>
      </div>
    </div>
  )
}
