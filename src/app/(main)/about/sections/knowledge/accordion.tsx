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
        className="group flex flex-1 cursor-default items-center justify-between bg-neutral-200 p-4 py-7 text-lg leading-none shadow-lg shadow-black/5 outline-none duration-300 hover:cursor-pointer hover:bg-neutral-300 dark:bg-neutral-900 hover:dark:bg-neutral-800 md:p-7"
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
      className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      {...props}
      ref={forwardedRef}
    >
      <div className="p-4 py-7 md:p-7">{children}</div>
    </Accordion.Content>
  )
)

export const Info: React.FC<{ knowledge: Knowledge }> = ({ knowledge }) => {
  const Icon = knowledge.icon

  return (
    <div className="relative flex w-full items-center">
      <div className="flex w-1/2 items-center gap-4 md:gap-6 md:text-xl">
        <span>
          <Icon />
        </span>
        <span>{knowledge.title}</span>
      </div>
      <div className="flex-1">
        <div
          className={`flex min-w-max items-center rounded-full bg-gradient-to-r from-blue-800/70 bg-no-repeat px-2 leading-none text-neutral-50 dark:from-blue-800/50 dark:text-neutral-300 md:text-lg ${
            knowledge.level === 1 && 'bg-[length:50%]'
          }
          ${knowledge.level === 2 && 'bg-[length:80%]'}
          ${knowledge.level === 3 && 'to-blue-800/5'}`}
        >
          {knowledge.level === 1 && <span>beginner</span>}
          {knowledge.level === 2 && <span>intermediate</span>}
          {knowledge.level === 3 && <span>advanced</span>}
        </div>
      </div>
    </div>
  )
}
