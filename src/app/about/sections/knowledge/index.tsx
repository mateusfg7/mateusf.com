'use client'

import * as Accordion from '@radix-ui/react-accordion'

import { knowledgeCategories, studiedTechs } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Info
} from './accordion'

export function Knowledge() {
  return (
    <div>
      <Accordion.Root
        className="z-0 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200/30 dark:border-neutral-900 dark:bg-neutral-900/30"
        type="single"
        collapsible
      >
        {knowledgeCategories.map(category => (
          <AccordionItem key={category.title} value={category.title}>
            <AccordionTrigger>{category.title}</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-3">
                {category.knowledgeList
                  .sort((a, b) => b.level - a.level)
                  .map(knowledge => (
                    <Info key={knowledge.title} knowledge={knowledge} />
                  ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
        <AccordionItem value="Studied techs">
          <AccordionTrigger>Studied techs</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-7">
              <div className="text-sm text-neutral-500">
                These are some languages, tools and technology that {"I've"}{' '}
                already studied, but I {"didn't"} delve into it, and I would
                need a content review to build something with...
              </div>
              <div className="flex flex-wrap gap-3">
                {studiedTechs.map(tech => (
                  <div
                    key={tech.title}
                    className="flex items-center justify-center gap-1 rounded-2xl bg-neutral-900/5 p-2 dark:bg-neutral-300/5"
                  >
                    <span>{tech.icon({})}</span>
                    <span>{tech.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
    </div>
  )
}
