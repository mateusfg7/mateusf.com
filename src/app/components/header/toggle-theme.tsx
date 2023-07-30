'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Menu } from '@headlessui/react'

import {
  Moon,
  Sun,
  Desktop,
  PaintBrushBroad
} from '@/shared/wrappers/phosphor-icons'

export function ToggleTheme() {
  const { setTheme, theme: currTheme } = useTheme()

  const SelectTheme = ({
    theme,
    title
  }: {
    theme: 'light' | 'dark' | 'system'
    title: string
  }) => (
    <Menu.Item
      as="button"
      title={title}
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
    </Menu.Item>
  )

  return (
    <Menu as="div" className="relative inline-flex items-center">
      <Menu.Button aria-label="Change color theme" title="Change color theme">
        <PaintBrushBroad className="text-xl" />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute right-0 top-10 origin-top-right animate-fade-down rounded-xl bg-neutral-50 p-1 outline-none animate-duration-300 dark:bg-neutral-900"
      >
        <div className="p-2 text-sm text-neutral-500">Color themes</div>
        <SelectTheme theme="light" title="Set light colors" />
        <SelectTheme theme="dark" title="Set dark colors" />
        <SelectTheme theme="system" title="Set system defined colors " />
      </Menu.Items>
    </Menu>
  )
}
