import fs from 'fs'
import path from 'path'

type PostParams = {
  slug: string
}

const getPostsName = async ():Promise<PostParams[]> => {
  const postsDirectory = path.join(process.cwd(), 'posts')

  const fileNames = await fs.promises.readdir(postsDirectory)

  const paths = fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, '')
  }))

  return paths
}

const getPostContents = async (params:PostParams) => {
  const postsDirectory = path.join(process.cwd(), 'posts')

  const fullPath = path.join(postsDirectory, `${params.slug}.md`)
  const fileContents = await fs.promises.readFile(fullPath, 'utf8')

  return fileContents
}

export { getPostsName, getPostContents }
