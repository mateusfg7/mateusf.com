'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { TbTools } from 'react-icons/tb'
import { ClosedCaptioning } from '@/shared/wrappers/phosphor-icons'

import { knowledgeCategories } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  KnowledgeInfo
} from './accordion'

export function Knowledge() {
  return (
    <div>
      <Accordion.Root
        className="z-0 w-full overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200/30 dark:border-neutral-950 dark:bg-neutral-950/30"
        type="single"
        collapsible
      >
        <AccordionItem value="Skill captions">
          <AccordionTrigger>
            <span className="flex items-center gap-3">
              <ClosedCaptioning />
              <span>Skill captions</span>
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'god',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills that I am god at it, or at least confortable to
                  study/work again.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'learning',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills I am currently learning and am still in my early
                  stages.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'bad',
                    icon: TbTools
                  }}
                />
                <span className="text-lg">
                  Skills that {"I've"} already studied, but I {"didn't"} delve
                  into it, and I would need a content review to build something.
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        {knowledgeCategories.map(category => {
          const learningSkills = category.knowledgeList.filter(
            skill => skill.status === 'learning'
          )
          const godSkills = category.knowledgeList.filter(
            skill => skill.status === 'god'
          )
          const badSkills = category.knowledgeList.filter(
            skill => skill.status === 'bad'
          )

          return (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {[...learningSkills, ...godSkills, ...badSkills].map(
                    knowledge => (
                      <KnowledgeInfo
                        knowledge={knowledge}
                        key={knowledge.title}
                      />
                    )
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
