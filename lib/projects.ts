

import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { ProjectMetaData, ProjectProps } from "@/types";
const rootDirectory= path.join(process.cwd(),'content','projects')
export async function getProjectBySlug(slug: string): Promise<ProjectProps | null> {
    try {
      const filePath = path.join(rootDirectory, `${slug}.mdx`)
      const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
      const { data, content } = matter(fileContent)
      return { metaData: { ...data, slug }, content }
    } catch (error) {
      return null
    }
  }
  
  export async function getProjects(limit?: number): Promise<ProjectMetaData[]> {
    const files = fs.readdirSync(rootDirectory)
  
    const projects = files
      .map(file => getProjectMetadata(file))
      .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
          return 1
        } else {
          return -1
        }
      })
  
    if (limit) {
      return projects.slice(0, limit)
    }
  
    return projects
  }
  
  export function getProjectMetadata(filepath: string): ProjectMetaData {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
  }