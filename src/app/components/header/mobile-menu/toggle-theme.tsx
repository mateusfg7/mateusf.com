import { useTheme } from 'next-themes'
import { Desktop, Moon, Sun } from '@/shared/wrappers/phosphor-icons'

export function ToggleTheme() {
  const { setTheme, theme: currTheme } = useTheme()

  return (
    <div className="flex flex-1 items-end justify-center pt-5">
      <div className="flex overflow-hidden rounded-xl bg-neutral-200/50 text-2xl dark:bg-neutral-1000/50">
        <button
          onClick={() => setTheme('light')}
          data-theme-light={currTheme === 'light'}
          className="p-4 data-[theme-light='true']:bg-neutral-300"
        >
          <Sun weight={currTheme === 'light' ? 'duotone' : 'regular'} />
        </button>
        <button
          onClick={() => setTheme('system')}
          data-theme-system={currTheme === 'system'}
          className="p-4 data-[theme-system='true']:bg-neutral-300 data-[theme-system='true']:dark:bg-neutral-800"
        >
          <Desktop weight={currTheme === 'system' ? 'duotone' : 'regular'} />
        </button>
        <button
          onClick={() => setTheme('dark')}
          data-theme-dark={currTheme === 'dark'}
          className="p-4 data-[theme-dark='true']:bg-neutral-800"
        >
          <Moon weight={currTheme === 'dark' ? 'duotone' : 'regular'} />
        </button>
      </div>
    </div>
  )
}
