import { KnowledgeCard } from './KnowledgeCard'
import { knowledgeCategories } from './knowledge-categories'

export function KnowledgeSection() {
  return (
    <div id="conhecimentos" className="min-h-screen flex justify-center py-20">
      <div className="content-w">
        <div className="w-full text-center mb-20">
          <h1 className="text-blue-500 text-4xl">Em que me destaco</h1>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {knowledgeCategories.map(knowledge => (
            <KnowledgeCard
              key={knowledge.title}
              title={knowledge.title}
              knowledgeList={knowledge.knowledgeList}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
