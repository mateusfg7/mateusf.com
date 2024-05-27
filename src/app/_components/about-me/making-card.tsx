import {
  ArrowUpRight,
  Coffee,
  DownloadSimple,
  GitFork,
  Globe,
  Star
} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { GithubLogo } from '~/app/about/sections/contact/icons'
import { Date } from '~/components/date'

type Repo = {
  name: string // 'mateusf.com'
  full_name: string //'mateusfg7/mateusf.com'
  html_url: string // 'https://github.com/mateusfg7/mateusf.com'
  description: string //'🏡 My corner of internet, a.k.a Personal Homepage & Portfolio.'
  created_at: string //'2020-12-07T18:21:19Z'
  updated_at: string // '2024-05-24T17:26:40Z'
  homepage: string // 'https://mateusf.com'
  size: number // 58928
  stargazers_count: number // 30
  language: string // 'TypeScript'
  forks_count: number // 7
  license: {
    key: string // 'gpl-3.0'
    name: string // 'GNU General Public License v3.0'
    spdx_id: string // 'GPL-3.0'
    url: string // 'https://api.github.com/licenses/gpl-3.0'
  }
  topics: string[]
}

async function getRepoData({ user, repo }: { user: string; repo: string }) {
  const res: Repo = await fetch(
    `https://api.github.com/repos/${user}/${repo}`
  ).then(data => data.json())

  return res
}
export async function MakingCard() {
  const repoData = await getRepoData({ user: 'mateusfg7', repo: 'mateusf.com' })
  return (
    <div className="w-full space-y-4 rounded-xl border border-neutral-200 p-5 text-sm shadow-md dark:border-neutral-800">
      <header className="flex justify-between gap-3">
        <div className="flex items-center gap-1">
          <Coffee />
          <span>Currently making...</span>
        </div>
        <Link href="/projects" className="opacity-80 hover:opacity-100">
          see projects
        </Link>
      </header>
      <div className="space-y-3 rounded-xl border border-neutral-200 p-2 dark:border-neutral-800">
        <div>
          <div className="flex items-start justify-between gap-1">
            <div>
              <div className="font-medium">{repoData.name}</div>
              <div className="text-xs opacity-80">
                <Date dateString={repoData.updated_at} />
              </div>
            </div>
            <div className="inline-flex items-center text-base">
              <a
                href={repoData.html_url}
                target="_blank"
                className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                <GithubLogo size="1em" />
              </a>
              <a
                href={repoData.homepage}
                target="_blank"
                className="rounded p-1 transition hover:bg-neutral-200 dark:hover:bg-neutral-800"
              >
                <Globe size="1em" />
              </a>
            </div>
          </div>
        </div>
        <div>{repoData.description}</div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span>
              <Star size="1em" />
            </span>
            <span>{repoData.stargazers_count}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>
              <GitFork size="1em" />
            </span>
            <span>{repoData.forks_count}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        <a
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-neutral-700/10 p-3 leading-none text-neutral-700 transition hover:bg-neutral-700 hover:text-white dark:bg-neutral-400/10 dark:text-neutral-400 dark:hover:bg-neutral-400 dark:hover:text-black"
          target="_blank"
          href="/assets/cv-mateus-felipe.pdf"
        >
          Download CV <DownloadSimple size="1em" />
        </a>
        <a
          className="flex items-end justify-center rounded-xl p-3 leading-none underline opacity-70 hover:opacity-100"
          target="_blank"
          href="https://read.cv/mateusfelipe/?ref=https://mateusf.com"
        >
          <span>read.cv</span>
          <ArrowUpRight className="text-xs" size="1em" />
        </a>
      </div>
    </div>
  )
}
