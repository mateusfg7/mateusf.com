'use client'

import { EyeSlash } from '@phosphor-icons/react/dist/ssr'
import { ComponentProps, useState } from 'react'

export function Spoiler({ children, ...rest }: ComponentProps<'div'>) {
  const [hide, setHide] = useState(true)

  return (
    <div {...rest} className="relative w-full">
      <div data-hide={hide} className="w-full data-[hide='true']:blur-lg">
        {children}
      </div>
      <div
        data-hide={hide}
        className="absolute inset-0 flex items-center justify-center data-[hide='false']:hidden"
      >
        <div className="divide-y divide-neutral-200 text-center dark:divide-neutral-500">
          <div className="flex justify-center py-2 text-3xl">
            <EyeSlash size="1em" />
          </div>
          <button
            className="py-2 hover:underline"
            onClick={() => setHide(false)}
          >
            Show content
          </button>
        </div>
      </div>
    </div>
  )
}
