import { Navbar } from '~/components/navbar'
import { Note } from '~/components/note'
import { getPostContents, getPostsName } from '~/lib/posts'

type Params = {
  slug: string
}

export const generateStaticParams = async () => {
  return await getPostsName()
}

export const dynamicParams = false

const Page = async ({ params }: { params: Params }) => {
  const contents = await getPostContents({ slug: params.slug })
  return (
    <main>
      <Navbar/>
      <Note>{contents}</Note>
    </main>
  )
}

export default Page
