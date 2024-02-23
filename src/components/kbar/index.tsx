import { ReactNode, forwardRef } from 'react'
import {
  ActionImpl,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarResults,
  KBarSearch,
  useMatches
} from 'kbar'
import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'

const Content = ({ children }: { children: ReactNode }) => {
  const { results } = useMatches()
  return (
    <div
      className={`w-[97vw] rounded-2xl bg-white p-6 shadow-lg outline-none dark:bg-neutral-1000 md:w-[45vw] ${
        results.length > 0 && 'space-y-4'
      }`}
    >
      {children}
    </div>
  )
}

const Search = () => (
  <div className="border-b border-neutral-500/20 px-3 pb-4 text-xl md:text-2xl">
    <KBarSearch className="w-full border-none bg-transparent outline-none placeholder:text-neutral-500/50" />
  </div>
)

const ResultItem = forwardRef<
  HTMLDivElement,
  {
    action: ActionImpl
    active: boolean
  }
>(({ action, active }, ref) => {
  return (
    <div
      ref={ref}
      className={`m-0 flex cursor-pointer items-center justify-between gap-5 rounded-xl p-2 text-lg transition-colors ${
        active
          ? 'bg-neutral-500/10 text-neutral-800 dark:bg-neutral-700/10 dark:text-neutral-400'
          : 'text-neutral-500'
      }`}
    >
      <div className="flex items-center gap-3">
        {action.icon && <span className="text-xl">{action.icon}</span>}
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-end gap-px">
            <span className="leading-none">{action.name}</span>
            {action.id.startsWith('out') && (
              <ArrowUpRight size="1em" className="text-xs" />
            )}
          </div>
          {action.subtitle && (
            <span className="text-xs text-neutral-400 dark:text-neutral-600">
              {action.subtitle}
            </span>
          )}
        </div>
      </div>
      {action.shortcut && (
        <div className="flex gap-1">
          {action.shortcut.map(shortcut => (
            <kbd key={shortcut} className="keyboard opacity-50">
              {shortcut}
            </kbd>
          ))}
        </div>
      )}
    </div>
  )
})
ResultItem.displayName = 'ResultItem'

const SectionTitle = forwardRef<HTMLDivElement, { title: string }>(
  ({ title }, ref) => (
    <div
      ref={ref}
      className="p-3 text-sm text-neutral-400 dark:text-neutral-600"
    >
      {title}
    </div>
  )
)
SectionTitle.displayName = 'SectionTitle'

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <SectionTitle title={item} />
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

export function KBar() {
  return (
    <KBarPortal>
      <KBarPositioner className="z-50 bg-black/20 dark:bg-black/30">
        <KBarAnimator>
          <Content>
            <Search />
            <RenderResults />
          </Content>
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  )
}
