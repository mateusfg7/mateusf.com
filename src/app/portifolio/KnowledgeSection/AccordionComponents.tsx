/* eslint-disable react/display-name */
import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import { CaretDown } from '@phosphor-icons/react'

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
        className="group flex flex-1 cursor-default items-center justify-between bg-neutral-900 p-7 text-lg leading-none shadow-lg shadow-black/5 outline-none duration-300 hover:cursor-pointer hover:bg-neutral-800"
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
      <div className="p-7">{children}</div>
    </Accordion.Content>
  )
)

export const Info: React.FC<{ knowledge: Knowledge }> = ({ knowledge }) => {
  const Icon = knowledge.icon

  return (
    <div className="relative flex w-full items-center text-xl">
      <div className="flex w-[60%] items-center gap-6">
        <span>
          <Icon />
        </span>
        <span>{knowledge.title}</span>
      </div>
      <div className="flex-1">
        <div
          className={`rounded-2xl bg-neutral-800 px-3 text-lg text-neutral-400 ${
            knowledge.level === 1 && 'w-[10%]'
          } ${knowledge.level === 2 && 'w-[60%]'} ${
            knowledge.level === 3 && 'w-[100%]'
          } min-w-max`}
        >
          {knowledge.level === 1 && 'Iniciante'}
          {knowledge.level === 2 && 'Intermediário'}
          {knowledge.level === 3 && 'Avançado'}
        </div>
      </div>
    </div>
  )
}
