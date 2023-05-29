'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from '@phosphor-icons/react'
import { KeyCode, KeyMod, useKeyboard } from '@geist-ui/core'

import { allPosts } from 'contentlayer/generated'
import { searchMath } from '@/shared/lib/match'
import { Trigger } from './trigger'
import { PostLink } from './post-link'
import { Overlay } from './overlay'
import noDataAmicoLight from './assets/no-data-amico-light.svg'
import noDataAmicoDark from './assets/no-data-amico-dark.svg'

export function Search() {
  const defaultPostList = allPosts
    .filter(post => post.status !== 'planned')
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 5)

  const [posts, setPosts] = useState(defaultPostList)
  const [search, setSearch] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const isSearching = search.length >= 2

  function filterPosts(searchString: string) {
    if (isSearching) {
      setPosts(
        allPosts
          .filter(
            post => searchMath(post, searchString) && post.status !== 'planned'
          )
          .sort((a, b) => {
            if (a.title < b.title) return -1
            if (a.title > b.title) return 1
            return 0
          })
      )
    } else setPosts(defaultPostList)
  }

  function toggleIsOpen() {
    setIsDialogOpen(!isDialogOpen)
  }

  useEffect(() => filterPosts(search), [search])
  useKeyboard(toggleIsOpen, [KeyCode.KEY_K, KeyMod.CtrlCmd], {
    preventDefault: true
  })

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Trigger />
      <Dialog.Portal>
        <Overlay />
        <Dialog.Content className="fixed top-[20%] left-1/2 w-[97vw] -translate-x-1/2 data-[state=open]:animate-contentShow md:w-[45vw]">
          <div className="relative rounded-2xl bg-white p-6 shadow-lg outline-none dark:bg-neutral-1000">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 border-b border-neutral-500/50 px-3 pb-4 text-lg md:text-2xl">
                <input
                  type="text"
                  placeholder="What are you searching for?"
                  onChange={e => setSearch(e.target.value)}
                  value={search}
                  className="w-full bg-transparent placeholder:text-neutral-500/50 focus:outline-none"
                />
                <button
                  onClick={() => setSearch('')}
                  className={isSearching ? 'hidden md:block' : 'hidden'}
                >
                  <X />
                </button>
              </div>

              <div className="space-y-3 px-3 text-sm text-neutral-600 dark:text-neutral-500">
                <p>Type more than 2 characters to start searching</p>
                <p>{isSearching ? 'Search results' : 'Discover nice posts'}</p>
              </div>
              <div className="flex h-[37vh] flex-col gap-1 overflow-y-auto">
                {posts.length === 0 && (
                  <div className="h-full w-full">
                    <Image
                      src={noDataAmicoLight}
                      alt="No data"
                      className="block h-full w-full object-contain dark:hidden"
                    />
                    <Image
                      src={noDataAmicoDark}
                      alt="No data"
                      className="hidden h-full w-full object-contain dark:block"
                    />
                  </div>
                )}

                {posts.map(post => (
                  <PostLink
                    key={post.id}
                    post={post}
                    toggleIsOpen={toggleIsOpen}
                  />
                ))}
              </div>
            </div>
            <Dialog.Close className="absolute top-2 right-2 text-lg active:text-red-600 md:hidden">
              <button>
                <X />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

// content: min-h-[55vh]
// posts: h-[38vh]
