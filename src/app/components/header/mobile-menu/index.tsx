import { ComponentProps, useState } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import * as Dialog from '@radix-ui/react-dialog'
import { useKBar } from 'kbar'
import {
  Icon as IconType,
  List,
  X,
  House,
  ArrowUpRight,
  File,
  GithubLogo,
  RssSimple,
  TreeStructure,
  MagnifyingGlass,
  Note,
  User,
  Briefcase
} from '@/shared/wrappers/phosphor-icons'
import { ToggleTheme } from './toggle-theme'

import './styles.css'

interface LinkProps extends NextLinkProps {
  title: string
  icon: IconType
}

interface OutLinkProps extends ComponentProps<'a'> {
  title: string
  icon: IconType
}

export function MobileMenu() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const Link = ({ title, icon, ...props }: LinkProps) => {
    const Icon = icon

    return (
      <NextLink
        {...props}
        onClick={() => setIsDialogOpen(false)}
        className="menu-item"
      >
        <Icon weight="duotone" />
        <span>{title}</span>
      </NextLink>
    )
  }

  const OutLink = ({ title, icon, ...props }: OutLinkProps) => {
    const Icon = icon

    return (
      <a {...props} className="menu-item" target="_blank">
        <Icon weight="duotone" />
        <span className="flex items-end gap-px">
          <span>{title}</span>
          <ArrowUpRight className="text-xs" />
        </span>
      </a>
    )
  }

  const Search = () => {
    const {
      query: { toggle }
    } = useKBar()

    return (
      <button
        onClick={() => {
          setIsDialogOpen(false)
          toggle()
        }}
        className="menu-item"
      >
        <MagnifyingGlass weight="duotone" />
        <span className="flex items-end gap-px">
          <span>Search</span>
        </span>
      </button>
    )
  }

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Trigger asChild className="md:hidden">
        <button aria-label="Open menu">
          <List />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-md data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed bottom-0 right-0 top-0 z-50 w-3/4 data-[state=closed]:animate-slide-right data-[state=open]:animate-slide-left">
          <div className="relative flex h-screen w-full">
            <Dialog.Close
              asChild
              className="absolute left-2 top-2 rounded-full p-2 backdrop-blur-lg active:bg-red-300/20 active:text-red-500 active:dark:bg-red-300/10 active:dark:text-red-400"
            >
              <button aria-label="Close">
                <X weight="bold" />
              </button>
            </Dialog.Close>
            <div className="flex flex-1 flex-col overflow-y-scroll rounded-bl-[2rem] rounded-tl-[2rem] bg-neutral-100 py-10 text-xl dark:bg-neutral-950">
              <Link title="Home" icon={House} href="/" />
              <Link title="Blog" icon={Note} href="/blog" />
              <Link title="Projects" icon={Briefcase} href="/projects" />
              <Link title="About" icon={User} href="/about" />
              <Link title="Sitemap" icon={TreeStructure} href="/sitemap" />
              <Search />
              <OutLink
                title="License"
                icon={File}
                rel="license"
                href="https://github.com/mateusfg7/mateusf.com/blob/main/LICENSE"
              />
              <OutLink
                title="Github"
                icon={GithubLogo}
                rel="external"
                href="https://github.com/mateusfg7/mateusf.com"
              />
              <OutLink
                title="RSS"
                icon={RssSimple}
                rel="noreferrer"
                href="/blog/feed"
              />

              <ToggleTheme />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
