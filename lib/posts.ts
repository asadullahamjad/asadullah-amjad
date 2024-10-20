import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { PostMetaData, PostProps } from "@/types";
const rootDirectory= path.join(process.cwd(),'content','posts')

// cwd means current working directory

export async function getPostBySlug(slug:string):Promise<PostProps| null> {
    try {
        
        const filePath= path.join(rootDirectory,`${slug}.mdx`)
        const readFile=fs.readFileSync(filePath,{encoding:'utf8'})

        const {data,content} = matter(readFile)
    
        return {metaData:{...data,slug},content}
    } catch (error:any) {
        console.log("Error while getting post by slug >>>",error.message)
        return null
    }
}
export async function getPosts(limit?: number): Promise<PostMetaData[]> {
    const files = fs.readdirSync(rootDirectory)
  
    const posts = files
      .map(file => getPostMetadata(file))
      .sort((a, b) => {
        if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
          return 1
        } else {
          return -1
        }
      })
  
    if (limit) {
      return posts.slice(0, limit)
    }
  
    return posts
  }
export function getPostMetadata(filepath: string): PostMetaData {
    const slug = filepath.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory, filepath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { data } = matter(fileContent)
    return { ...data, slug }
  }