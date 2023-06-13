'use client'

import Link from 'next/link'
import { Menu } from '@headlessui/react'
import { slug } from '@/shared/lib/slug'
import { getUniqueCategoryList } from '@/shared/lib/categories'
import { CaretDown, ArrowRight } from '@/shared/lib/phosphor-icons'

export function CategorySelector() {
  const categories = getUniqueCategoryList()

  return (
    <Menu as="div" className="relative inline-flex items-center">
      <Menu.Button className="flex items-center gap-1 rounded-lg p-2 leading-none text-neutral-700 hover:bg-neutral-200/50 hover:text-neutral-900 dark:text-neutral-300 hover:dark:bg-neutral-900 dark:hover:text-neutral-100">
        <span>Categories</span>
        <CaretDown />
      </Menu.Button>
      <Menu.Items
        as="div"
        className="absolute left-1/2 top-10 w-full -translate-x-1/2 animate-custom-fade-down rounded-xl bg-neutral-50 p-1 outline-none dark:bg-neutral-900"
      >
        {categories.sort().map(category => (
          <Menu.Item
            as="div"
            key={category}
            className="overflow-hidden rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-1000"
          >
            <Link
              href={`/categories/${slug(category)}`}
              className="flex w-full items-center justify-between gap-2 whitespace-nowrap  p-2 leading-none "
            >
              <span>{category}</span>
              <ArrowRight weight="thin" className="text-sm" />
            </Link>
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  )
}
