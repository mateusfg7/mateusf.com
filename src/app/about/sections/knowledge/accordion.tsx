/* eslint-disable react/display-name */
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from '@/shared/wrappers/phosphor-icons'

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
      className="mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
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
        className="group flex flex-1 cursor-default items-center justify-between bg-neutral-200 p-4 py-7 text-lg leading-none shadow-lg shadow-black/5 outline-none duration-300 hover:cursor-pointer hover:bg-neutral-300 dark:bg-neutral-950 hover:dark:bg-neutral-800 md:p-7"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <CaretDown
          className="transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
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
      className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
      {...props}
      ref={forwardedRef}
    >
      <div className="p-4 py-7 md:p-7">{children}</div>
    </Accordion.Content>
  )
)

export function KnowledgeInfo({ knowledge }: { knowledge: Knowledge }) {
  const Dot = () => (
    <span className="absolute right-2 top-2">
      <span className="relative flex h-1 w-1">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-1 w-1 rounded-full bg-green-500"></span>
      </span>
    </span>
  )

  return (
    <div
      key={knowledge.title}
      data-is-bad={knowledge.status === 'bad'}
      className="relative flex items-center justify-center gap-1 rounded-2xl bg-neutral-900/5 p-4 leading-none data-[is-bad='true']:opacity-50 dark:bg-neutral-300/5"
    >
      <span>{knowledge.icon({})}</span>
      <span>{knowledge.title}</span>

      {knowledge.status === 'learning' && <Dot />}
    </div>
  )
}
