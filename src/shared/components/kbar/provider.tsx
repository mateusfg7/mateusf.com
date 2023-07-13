import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { KBarProvider, Action } from 'kbar'
import { useTheme } from 'next-themes'
import { allPosts } from 'contentlayer/generated'
import {
  Article,
  Briefcase,
  Code,
  Desktop,
  File,
  FileDashed,
  FolderOpen,
  GithubLogo,
  House,
  MagnifyingGlass,
  Moon,
  Note,
  Palette,
  PencilSimpleLine,
  Rss,
  Sun,
  Tag,
  TreeStructure,
  ChartLine
} from '@/shared/lib/phosphor-icons'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { KBar } from '@/shared/components/kbar'

export function CustomKBarProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const { setTheme } = useTheme()

  // TODO: List projects on command bar (https://github.com/mateusfg7/mateusf.com/issues/572)

  const navigationActions: Action[] = [
    {
      id: 'home',
      name: 'Home',
      shortcut: ['n', 'h'],
      keywords: 'homepage main',
      icon: <House weight="duotone" />,
      perform: () => push('/')
    },
    {
      id: 'portifolio',
      name: 'Portfolio',
      shortcut: ['n', 'p'],
      keywords: 'portfolio projects',
      icon: <Briefcase weight="duotone" />,
      perform: () => push('/portifolio')
    }
  ]

  const getIconByStatus = (status: 'published' | 'draft' | 'planned') => {
    if (status === 'published') return <Article weight="duotone" />
    if (status === 'draft') return <FileDashed weight="duotone" />
    if (status === 'planned') return <PencilSimpleLine weight="duotone" />
  }
  const postsAsAction: Action[] = getSortedPosts(
    allPosts.filter(post => post.status !== 'planned')
  ).map(({ id, title, status, test, tags, description }) => ({
    id,
    name: title,
    icon: test ? <Code weight="duotone" /> : getIconByStatus(status),
    keywords: tags
      .split(',')
      .map(tag => tag.trim())
      .toString()
      .replaceAll(',', ' '),
    parent: 'search-posts',
    subtitle: description,
    perform: () => push(`/post/${id}`)
  }))

  const blogActions: Action[] = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Note weight="duotone" />,
      perform: () => push('/')
    },
    {
      id: 'categories',
      name: 'Categories',
      shortcut: ['b', 'c'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <FolderOpen weight="duotone" />,
      perform: () => push('/categories')
    },
    {
      id: 'tags',
      name: 'Tags',
      shortcut: ['b', 't'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Tag weight="duotone" />,
      perform: () => push('/tag')
    },
    {
      id: 'rss',
      name: 'Rss',
      section: 'Blog',
      keywords: 'feed rss atom',
      icon: <Rss weight="duotone" />,
      perform: () => push('/rss')
    },
    {
      id: 'search-posts',
      name: 'Search posts...',
      section: 'Blog',
      keywords: 'search posts write writing blog',
      shortcut: ['b', 's'],
      icon: <MagnifyingGlass weight="duotone" />
    },
    ...postsAsAction
  ]

  const websiteInformationActions: Action[] = [
    {
      id: 'out-repo',
      name: 'Source code',
      section: 'Website',
      keywords: 'repo source github código fonte',
      icon: <GithubLogo weight="duotone" />,
      perform: () =>
        window.open('https://github.com/mateusfg7/mateusf.com', '_blank')
    },
    {
      id: 'out-license',
      name: 'License',
      section: 'Website',
      keywords: 'mit gpl',
      icon: <File weight="duotone" />,
      perform: () =>
        window.open(
          'https://github.com/mateusfg7/mateusf.com/blob/main/LICENSE',
          '_blank'
        )
    },
    {
      id: 'out-analytics',
      name: 'Analytics',
      section: 'Website',
      keywords: 'stats graph traffic',
      icon: <ChartLine weight="duotone" />,
      perform: () =>
        window.open(
          'https://analytics.umami.is/share/IV950FFonuZg4Rbn/mateusf.com',
          '_blank'
        )
    },
    {
      id: 'sitemap',
      name: 'Sitemap',
      section: 'Website',
      keywords: 'map links crawler',
      icon: <TreeStructure weight="duotone" />,
      perform: () => push('/sitemap.xml')
    }
  ]

  const themeActions: Action[] = [
    {
      id: 'set-theme',
      name: 'Change theme',
      icon: <Palette weight="duotone" />,
      keywords: 'theme dark light',
      shortcut: ['c', 't'],
      section: 'Configurations'
    },
    {
      id: 'system-theme',
      name: 'System defined',
      icon: <Desktop weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('system')
    },
    {
      id: 'dark-theme',
      name: 'Dark mode',
      icon: <Moon weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('dark')
    },
    {
      id: 'light-theme',
      name: 'Light mode',
      icon: <Sun weight="duotone" />,
      parent: 'set-theme',
      keywords: 'theme dark light',
      perform: () => setTheme('light')
    }
  ]

  const actions: Action[] = [
    ...navigationActions,
    ...blogActions,
    ...websiteInformationActions,
    ...themeActions
  ]

  return (
    <KBarProvider actions={actions}>
      <KBar />
      {children}
    </KBarProvider>
  )
}
