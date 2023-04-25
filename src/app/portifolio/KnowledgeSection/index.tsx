import { KnowledgeCard } from './KnowledgeCard'
import { knowledgeCategories } from './knowledge-categories'
import { SectionLayout } from '../SectionLayout'

export function KnowledgeSection() {
  return (
    <SectionLayout title="Em que me destaco" id="conhecimento">
      <div className="grid md:grid-cols-2 gap-10">
        {knowledgeCategories.map(knowledge => (
          <KnowledgeCard
            key={knowledge.title}
            title={knowledge.title}
            knowledgeList={knowledge.knowledgeList}
          />
        ))}
      </div>
    </SectionLayout>
  )
}
