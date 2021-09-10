import { removeRepeatedValuesFromArray } from './utils'
import { KnowledgeData } from './types'

export const getRawTagListFromKnowledge = (knowledgeList: KnowledgeData[]): string[] => {

  const splicedTagListOfSubLists = knowledgeList.map(knowledge => {
    return knowledge.tags.split(',')
  })

  let completeRawTagList = []

  splicedTagListOfSubLists.forEach(tagList => {
    tagList.forEach(tag => completeRawTagList.push(tag.trim()))
  })

  return completeRawTagList
}

export const getTagListFromPosts = (knowledgeList: KnowledgeData[]): string[] => {
  const rawTagList = getRawTagListFromKnowledge(knowledgeList)
  const tagList = removeRepeatedValuesFromArray(rawTagList)

  return tagList
}

export const getKnowledgeListOfTag = (
  knowledgeList: KnowledgeData[],
  tag: string
): KnowledgeData[] => {

  const filteredKnowledgeList = knowledgeList.filter(knowledge => {
    const listOfTags = knowledge.tags.split(',')
    return listOfTags.includes(tag)
  })

  return filteredKnowledgeList
}
