'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { Brain, ClosedCaptioning } from '@phosphor-icons/react/dist/ssr'

import { knowledgeCategories } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  KnowledgeInfo
} from './accordion'
import { ToolsIcon } from './tools-icon'

export function Knowledge() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-center gap-1 text-xl font-medium md:justify-start">
        <Brain
          size="1em"
          className="text-neutral-600 dark:text-neutral-400"
          weight="duotone"
        />
        <span>Knowledge</span>
      </div>
      <Accordion.Root
        className="z-0 w-full hover:text-neutral-500 dark:hover:text-neutral-400"
        type="single"
        collapsible
      >
        <AccordionItem value="Skill captions">
          <AccordionTrigger>
            <span className="flex items-center gap-3">
              <ClosedCaptioning size="1em" />
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
                    status: 'stack',
                    icon: ToolsIcon
                  }}
                />
                <span className="text-lg">
                  My main stack, the skills that I am most comfortable with.
                </span>
              </div>
              <div className="flex items-center gap-6">
                <KnowledgeInfo
                  knowledge={{
                    title: 'Skill',
                    color: '#fff',
                    status: 'god',
                    icon: ToolsIcon
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
                    icon: ToolsIcon
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
                    icon: ToolsIcon
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
          const stackSkills = category.knowledgeList.filter(
            skill => skill.status === 'stack'
          )

          return (
            <AccordionItem key={category.title} value={category.title}>
              <AccordionTrigger>{category.title}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-3">
                  {[
                    ...stackSkills,
                    ...godSkills,
                    ...learningSkills,
                    ...badSkills
                  ].map(knowledge => (
                    <KnowledgeInfo
                      knowledge={knowledge}
                      key={knowledge.title}
                    />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion.Root>
    </div>
  )
}
