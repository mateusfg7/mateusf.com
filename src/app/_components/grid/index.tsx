import { Book, Wrench } from '@phosphor-icons/react/dist/ssr'
import { DiscordStatus } from './cards/discord-status'
import { GithubLink } from './cards/github-link'
import { GithubStats } from './cards/github-stats'
import { LatestPost } from './cards/latest-post'
import { LetterboxedLink } from './cards/letterboxed-link'
import { LinksCard } from './cards/links'
import { MostListenedMusic } from './cards/most-listened-music'
import { StacksCard } from './cards/stacks-card'

const BooksCard = () => (
  <div className="relative flex items-center justify-center gap-2 rounded-xl border border-black/30 bg-black/5 p-5 dark:border-white/30 dark:bg-white/5">
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 text-5xl font-medium opacity-30 blur-sm">
      <Book weight="duotone" />
      <span>Books</span>
    </div>

    <Wrench />
    <span>Under construction...</span>
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
        <MostListenedMusic />
      </div>

      <div className="mt-3 grid grid-cols-3 md:grid-cols-6">
        <div className="col-span-3 flex flex-col gap-3">
          <div className="flex gap-3">
            <div className="w-24">
              <LetterboxedLink />
            </div>
            <div className="flex w-full flex-col gap-3">
              <LinksCard />
            </div>
          </div>

          <div className="cols-span-3">
            <StacksCard />
          </div>
        </div>

        <div className="col-span-3 space-y-3 md:ml-3">
          <div className="flex gap-3">
            <DiscordStatus />

            <LatestPost />
          </div>
          <BooksCard />
        </div>
      </div>
    </div>
  )
}
