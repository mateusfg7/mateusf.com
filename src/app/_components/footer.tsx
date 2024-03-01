import { ComponentProps } from 'react'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const Link = ({ children, ...props }: ComponentProps<'a'>) => (
  <a
    {...props}
    className="inline-flex items-end gap-px hover:text-neutral-900 active:text-neutral-900 hover:dark:text-neutral-200 active:dark:text-neutral-200"
    target="_blank"
  >
    {children}
  </a>
)

const ArrowIcon = () => <ArrowUpRight size="1em" className="text-xs" />

export function Footer() {
  return (
    <div className="border-t border-neutral-300/30 py-11 dark:border-neutral-800/20">
      <div className="content-container m-auto flex items-center leading-none md:justify-between">
        <div className="hidden gap-4 text-neutral-500 dark:text-neutral-400 md:flex">
          <Link
            href="https://github.com/mateusfg7/mateusf.com/blob/main/LICENSE/?ref=https://mateusf.com"
            rel="license"
          >
            <span>License</span>
            <ArrowIcon />
          </Link>
          <Link href="/sitemap" rel="noreferrer">
            <span>Sitemap</span>
            <ArrowIcon />
          </Link>
          <Link href="/blog/feed" rel="noreferrer">
            <span>RSS</span>
            <ArrowIcon />
          </Link>
          <Link
            href="https://github.com/mateusfg7/mateusf.com/?ref=https://mateusf.com"
            rel="external"
          >
            <span>Github</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="text-center text-sm text-neutral-400 dark:text-neutral-500 md:text-right">
          Built with{' '}
          <Link
            href="https://nextjs.org/?ref=https://mateusf.com"
            rel="external"
          >
            Next.js
          </Link>
          ,{' '}
          <Link
            href="https://mdxjs.com/?ref=https://mateusf.com"
            rel="external"
          >
            MDX
          </Link>
          ,{' '}
          <Link
            href="https://tailwindcss.com/?ref=https://mateusf.com"
            rel="external"
          >
            Tailwindcss
          </Link>{' '}
          and{' '}
          <Link
            href="https://velite.js.org/?ref=https://mateusf.com"
            rel="external"
          >
            Velite
          </Link>{' '}
          by{' '}
          <Link
            href="https://github.com/mateusfg7/?ref=https://mateusf.com"
            rel="external"
          >
            Mateus Felipe
          </Link>
          .
        </div>
      </div>
    </div>
  )
}
