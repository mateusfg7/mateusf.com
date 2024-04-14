import { GithubLink } from './cards/github-link'
import { GithubStats } from './cards/github-stats'
import { LatestPost } from './cards/latest-post'
import { LetterboxedLink } from './cards/letterboxed-link'
import { LinksCard } from './cards/links'
import { StacksCard } from './cards/stacks-card'

const Example = ({ label = 'Example' }: { label?: string }) => (
  <div className="flex items-center justify-center rounded-xl bg-neutral-200 p-1 dark:bg-neutral-900">
    {label}
  </div>
)

export function Grid() {
  return (
    <div>
      <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
        <div className="col-span-3">
          <GithubLink />
        </div>
        <div className="col-span-2">
          <GithubStats />
        </div>
        <Example label="Music card" />
      </div>

      <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
        <div className="col-span-3 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-24">
              <LetterboxedLink />
            </div>
            <div className="flex w-full flex-col gap-3 ">
              <LinksCard />
              <Example label="Wakatime stat" />
            </div>
          </div>

          <div className="cols-span-3">
            <StacksCard />
          </div>
        </div>

        <div className="col-span-3 space-y-3 md:ml-3">
          <div className="flex gap-3 ">
            <Example label="Discord status" />

            <LatestPost />
          </div>
          <Example label="Book card" />
        </div>
      </div>
    </div>
  )
}
