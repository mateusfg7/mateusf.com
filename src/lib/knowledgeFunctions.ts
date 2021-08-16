/* eslint @typescript-eslint/explicit-module-boundary-types: "off" */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const knowledgeDirectory = path.join(process.cwd(), '_mybrainknowledge')

export type SortedKnowledgeData = {
  id: string
  date: string
  title: string
  category: string
  tags: string
  description: string
}[]

export function getSortedKnowledgeData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(knowledgeDirectory)
  const allKnowledgeData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(knowledgeDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as {
        date: string
        title: string
        category: string
        tags: string
        description: string
      })
    }
  })
  // Sort posts by date
  return allKnowledgeData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(knowledgeDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(knowledgeDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Combine the data with the id
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as {
      date: string
      title: string
      category: string
      tags: string
      description: string
      lastUpdate?: string
    })
  }
}
