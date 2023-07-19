'use client'

import { useEffect, useState } from 'react'
import { Menu } from '@headlessui/react'
import { Moon, Sun, Desktop } from '@/shared/wrappers/phosphor-icons'
import { useTheme } from 'next-themes'

export function ToggleTheme() {
  const [isMounted, setIsMounted] = useState(false)

  const { setTheme, theme: currTheme } = useTheme()

  const SelectTheme = ({ theme }: { theme: 'light' | 'dark' | 'system' }) => (
    <button
      onClick={() => setTheme(theme)}
      className={`flex w-full items-center justify-start gap-4 rounded-xl p-2 text-lg leading-none hover:bg-neutral-100 hover:dark:bg-neutral-1000 ${
        currTheme === theme && 'font-bold'
      }`}
    >
      {theme === 'light' && (
        <>
          <Sun weight={currTheme === theme ? 'duotone' : 'regular'} />
          <span>Light</span>
        </>
      )}
      {theme === 'dark' && (
        <>
          <Moon weight={currTheme === theme ? 'duotone' : 'regular'} />
          <span>Dark</span>
        </>
      )}
      {theme === 'system' && (
        <>
          <Desktop weight={currTheme === theme ? 'duotone' : 'regular'} />
          <span>System</span>
        </>
      )}
    </button>
  )

  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return <></>

  return (
    <Menu as="div" className="relative inline-flex items-center">
      <Menu.Button aria-label="Change color theme">
        {currTheme === 'light' && <Sun className="text-xl" />}
        {currTheme === 'dark' && <Moon className="text-xl" />}
        {currTheme === 'system' && <Desktop className="text-xl" />}
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-10 origin-top-right animate-fade-down rounded-xl bg-neutral-50 p-1 outline-none animate-duration-300 dark:bg-neutral-900"
      >
        <Menu.Item as="div">
          <SelectTheme theme="light" />
          <SelectTheme theme="dark" />
          <SelectTheme theme="system" />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}
