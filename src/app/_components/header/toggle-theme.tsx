import { useTheme } from 'next-themes'
import { Menu, MenuItemProps } from '@headlessui/react'

import {
  Moon,
  Sun,
  Desktop,
  PaintBrushBroad
} from '@phosphor-icons/react/dist/ssr'

export function ToggleTheme() {
  const { setTheme, theme: currTheme } = useTheme()

  const SelectTheme = ({
    theme,
    ...props
  }: {
    theme: 'light' | 'dark' | 'system'
  } & MenuItemProps<'button'>) => (
    <Menu.Item
      as="button"
      onClick={() => setTheme(theme)}
      data-isThemeActive={currTheme === theme}
      className="flex w-full items-center justify-start gap-4 rounded-xl p-2 text-lg leading-none data-[isThemeActive='true']:font-bold hover:bg-neutral-100 hover:dark:bg-neutral-1000"
      {...props}
    >
      {theme === 'light' && (
        <>
          <Sun
            size="1em"
            weight={currTheme === theme ? 'duotone' : 'regular'}
          />
          <span>Light</span>
        </>
      )}
      {theme === 'dark' && (
        <>
          <Moon
            size="1em"
            weight={currTheme === theme ? 'duotone' : 'regular'}
          />
          <span>Dark</span>
        </>
      )}
      {theme === 'system' && (
        <>
          <Desktop
            size="1em"
            weight={currTheme === theme ? 'duotone' : 'regular'}
          />
          <span>System</span>
        </>
      )}
    </Menu.Item>
  )

  return (
    <Menu as="div" className="relative inline-flex items-center">
      <Menu.Button aria-label="Change color theme" title="Change color theme">
        <PaintBrushBroad size="1em" className="text-xl" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-10 origin-top-right animate-fade-down rounded-xl bg-neutral-50 p-1 outline-none animate-duration-300 dark:bg-neutral-950"
      >
        <div className="p-2 text-sm text-neutral-500">Color themes</div>
        <SelectTheme theme="light" title="Set light colors" />
        <SelectTheme theme="dark" title="Set dark colors" />
        <SelectTheme theme="system" title="Set system defined colors " />
      </Menu.Items>
    </Menu>
  )
}
