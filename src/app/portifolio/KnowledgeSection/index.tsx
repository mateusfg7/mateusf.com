import * as Accordion from '@radix-ui/react-accordion'

import { knowledgeCategories } from './knowledge-categories'
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Info
} from './AccordionComponents'

import { SectionLayout } from '../SectionLayout'

export function KnowledgeSection() {
  return (
    <SectionLayout title="Em que me destaco" id="conhecimentos">
      <div className="px-28">
        <Accordion.Root
          className="w-full overflow-hidden rounded-3xl border border-neutral-900"
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
        </Accordion.Root>
      </div>
    </SectionLayout>
  )
}
