/* eslint-disable react/display-name */
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react/dist/ssr'

import { Knowledge } from './knowledge-categories'

interface AccordionItemProps extends Accordion.AccordionItemProps {
  children: React.ReactNode
}
export const AccordionItem = React.forwardRef(
  (
    { children, ...props }: AccordionItemProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Accordion.Item
      className="mt-px border-b border-neutral-200 first:mt-0 last:border-none focus-within:relative focus-within:z-10 dark:border-neutral-800"
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
)

interface AccordionTriggerProps extends Accordion.AccordionTriggerProps {
  children: React.ReactNode
}
export const AccordionTrigger = React.forwardRef(
  (
    { children, ...props }: AccordionTriggerProps,
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className="group flex flex-1 cursor-default items-center justify-between py-7 text-lg leading-none outline-none transition-colors hover:cursor-pointer hover:text-neutral-900 hover:underline dark:hover:text-neutral-300"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <CaretDown
          size="1em"
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
)

interface AccordionContentProps extends Accordion.AccordionContentProps {
  children: React.ReactNode
}
export const AccordionContent = React.forwardRef(
  (
    { children, ...props }: AccordionContentProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>
  ) => (
    <Accordion.Content
      className="overflow-hidden text-neutral-900 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown dark:text-neutral-300"
      {...props}
      ref={forwardedRef}
    >
      <div className="pb-7">{children}</div>
    </Accordion.Content>
  )
)

const Dot = () => (
  <span className="absolute right-2 top-2">
    <span className="relative flex h-1 w-1">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex h-1 w-1 rounded-full bg-green-500"></span>
    </span>
  </span>
)
export function KnowledgeInfo({ knowledge }: { knowledge: Knowledge }) {
  return (
    <div
      key={knowledge.title}
      data-is-learning={knowledge.status === 'learning'}
      data-is-bad={knowledge.status === 'bad'}
      className="relative flex items-center justify-center gap-1 overflow-hidden rounded-2xl bg-neutral-900/5 p-4 leading-none data-[is-learning='true']:animate-pulse data-[is-bad='true']:opacity-50 dark:bg-neutral-300/5"
    >
      <span>{knowledge.icon({})}</span>
      <span>{knowledge.title}</span>

      {knowledge.status === 'stack' && <Dot />}
    </div>
  )
}
