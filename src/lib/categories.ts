import { getFrequencyOfValue, removeRepeatedValuesFromArray } from './utils'
import { KnowledgeData } from './types'
export interface CategoriesAndNumberOfKnowledge {
  category: string
  numberOfKnowledge: number
}

export const getRawCategoryListFromKnowledge = (knowledgeList: KnowledgeData[]): string[] =>
  knowledgeList.map(knowledge => knowledge.category)

export const getCategoryListFromPosts = (knowledgeList: KnowledgeData[]): string[] => {
  const rawCategoryList = getRawCategoryListFromKnowledge(knowledgeList)

  return removeRepeatedValuesFromArray(rawCategoryList)
}

export function getCategoriesAndNumberOfKnowledge(
  knowledgeList: KnowledgeData[]
): CategoriesAndNumberOfKnowledge[] {
  const rawCategoryList = getRawCategoryListFromKnowledge(knowledgeList)
  const categoryList = getCategoryListFromPosts(knowledgeList)

  const categoriesAndNumberOfKnowledge = categoryList.map(category => {
    const numberOfKnowledge = getFrequencyOfValue(rawCategoryList, category)

    return {
      category,
      numberOfKnowledge
    }
  })

  return categoriesAndNumberOfKnowledge
}

export const getKnowledgeListOfCategory = (
  knowledgeList: KnowledgeData[],
  category: string
): KnowledgeData[] => knowledgeList.filter(knowledge => knowledge.category === category)
