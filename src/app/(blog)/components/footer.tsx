import { ReactNode } from 'react'
import NextLink from 'next/link'
import { ArrowUpRight } from '@/shared/lib/phosphor-icons'

export function Footer() {
  const Link = ({ href, children }: { href: string; children: ReactNode }) => (
    <NextLink
      className="inline-flex items-end gap-px active:text-neutral-900 active:dark:text-neutral-200 hover:text-neutral-900 hover:dark:text-neutral-200"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </NextLink>
  )

  const ArrowIcon = () => <ArrowUpRight className="text-xs" />

  return (
    <div className="mt-28 border-t border-neutral-300/30 py-11 dark:border-neutral-800/20">
      <div className="blog-content-w m-auto flex items-center md:justify-between leading-none">
        <div className="hidden md:flex gap-4 text-neutral-500 dark:text-neutral-400">
          <Link href="https://github.com/mateusfg7/mfg-b/blob/main/LICENSE">
            <span>License</span>
            <ArrowIcon />
          </Link>
          <Link href="/sitemap.xml">
            <span>Sitemap</span>
            <ArrowIcon />
          </Link>
          <Link href="/feed">
            <span>RSS</span>
            <ArrowIcon />
          </Link>
          <Link href="https://github.com/mateusfg7/mfg-b">
            <span>Github</span>
            <ArrowIcon />
          </Link>
        </div>
        <div className="text-sm text-center md:text-right text-neutral-400 dark:text-neutral-500">
          Built with <Link href="https://nextjs.org/">Next.js</Link>,{' '}
          <Link href="https://mdxjs.com/">MDX</Link>,{' '}
          <Link href="https://tailwindcss.com/">Tailwindcss</Link> and{' '}
          <Link href="https://www.contentlayer.dev/">Contentlayer</Link> by{' '}
          <Link href="https://github.com/mateusfg7">Mateus Felipe</Link>.
        </div>
      </div>
    </div>
  )
}
