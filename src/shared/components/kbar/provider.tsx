import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { KBarProvider, Action } from 'kbar'
import { useTheme } from 'next-themes'
import { allPosts, allProjects, allTILs } from 'contentlayer/generated'
import {
  Article,
  Briefcase,
  Code,
  Desktop,
  File,
  FileDashed,
  FolderOpen,
  Folder,
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
  ChartLine,
  User,
  SquaresFour,
  Files,
  Books,
  ChartPieSlice,
  Notebook
} from '@/shared/wrappers/phosphor-icons'
import { getSortedPosts } from '@/shared/lib/get-sorted-posts'
import { KBar } from '@/shared/components/kbar'
import { slug } from '@/shared/lib/slug'
import { getUniqueCategoryList } from '@/shared/lib/categories'
import { getUniqueTagListFromPosts } from '@/shared/lib/tags'

export function CustomKBarProvider({ children }: { children: ReactNode }) {
  const { push } = useRouter()
  const { setTheme } = useTheme()

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
      id: 'about',
      name: 'About',
      shortcut: ['n', 'a'],
      keywords: 'about me user information info',
      icon: <User weight="duotone" />,
      perform: () => push('/about')
    },
    {
      id: 'statistics',
      name: 'Statistics',
      shortcut: ['n', 's'],
      keywords: 'statistics github spotify data',
      icon: <ChartPieSlice weight="duotone" />,
      perform: () => push('/about/statistics')
    }
  ]

  const projectsAsActions: Action[] = allProjects.map(project => ({
    id: `out-${slug(project.title)}`,
    name: project.title,
    subtitle: project.description,
    keywords: [...project.tags, project.core_techs].toString(),
    section: 'Projects',
    icon: <SquaresFour weight="duotone" />,
    parent: 'search-projects',
    get perform() {
      if (project.website) return () => window.open(project.website, '_blank')
      if (project.repository)
        return () => window.open(project.repository, '_blank')

      return undefined
    }
  }))
  const projectsActions: Action[] = [
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['p'],
      section: 'Projects',
      keywords: 'works projects tools apps',
      icon: <Briefcase weight="duotone" />,
      perform: () => push('/projects')
    },
    {
      id: 'search-projects',
      name: 'Search project...',
      shortcut: ['p', 's'],
      section: 'Projects',
      keywords: 'works projects tools apps',
      icon: <MagnifyingGlass weight="duotone" />
    },
    ...projectsAsActions
  ]

  const categoriesAsAction: Action[] = getUniqueCategoryList()
    .sort()
    .map(category => ({
      id: slug(category),
      name: category,
      icon: <Folder weight="duotone" />,
      parent: 'categories',
      section: 'Blog',
      perform: () => push(`/blog/categories/${slug(category)}`)
    }))
  const tagsAsAction: Action[] = getUniqueTagListFromPosts()
    .sort()
    .map(tag => ({
      id: slug(tag),
      name: tag,
      icon: <Tag weight="duotone" />,
      parent: 'tags',
      section: 'Blog',
      perform: () => push(`/blog/tag/${slug(tag)}`)
    }))

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
    section: 'Blog',
    perform: () => push(`/blog/post/${id}`)
  }))
  const tilsAsAction: Action[] = allTILs.map(til => ({
    id: slug(til.title),
    name: til.title,
    icon: <Notebook weight="duotone" />,
    keywords: til.tags
      .map(tag => tag.trim())
      .toString()
      .replaceAll(',', ' '),
    parent: 'search-posts',
    subtitle: til.description,
    section: 'Blog',
    perform: () => push(`/blog/til#${slug(til.title)}`)
  }))

  const blogActions: Action[] = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Note weight="duotone" />,
      perform: () => push('/blog')
    },
    {
      id: 'til',
      name: 'Today I Learned',
      shortcut: ['b', 'i'],
      section: 'Blog',
      keywords: 'writing learning progress skills',
      icon: <Notebook weight="duotone" />,
      perform: () => push('/blog/til')
    },
    {
      id: 'categories',
      name: 'Categories',
      shortcut: ['b', 'c'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <FolderOpen weight="duotone" />
    },
    ...categoriesAsAction,
    {
      id: 'tags',
      name: 'Tags',
      shortcut: ['b', 't'],
      section: 'Blog',
      keywords: 'posts writing',
      icon: <Tag weight="duotone" />
    },
    ...tagsAsAction,
    {
      id: 'rss',
      name: 'Rss',
      section: 'Blog',
      keywords: 'feed rss atom',
      icon: <Rss weight="duotone" />,
      perform: () => push('/blog/feed')
    },
    {
      id: 'search-posts',
      name: 'Search posts...',
      section: 'Blog',
      keywords: 'search posts write writing blog',
      shortcut: ['b', 's'],
      icon: <MagnifyingGlass weight="duotone" />
    },
    ...postsAsAction,
    ...tilsAsAction
  ]

  const personalLinksActions: Action[] = [
    {
      id: 'out-dotfiles',
      name: 'My Manjaro Dotfiles',
      section: 'Personal Links',
      keywords: 'linux config setup',
      icon: <Files weight="duotone" />,
      perform: () =>
        window.open('https://github.com/mateusfg7/dotfiles', '_blank')
    },
    {
      id: 'out-bookshelf',
      name: 'My Bookshelf',
      section: 'Personal Links',
      keywords: 'books library',
      icon: <Books weight="duotone" />,
      perform: () =>
        window.open(
          'https://www.skoob.com.br/estante/livros/todos/8289961',
          '_blank'
        )
    }
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
      perform: () => push('/sitemap')
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
      name: 'System colors',
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
    ...projectsActions,
    ...personalLinksActions,
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
