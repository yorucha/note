import Link from 'next/link'

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
      <Note>{contents}</Note>
      <div className='container mx-auto flex items-center justify-center'>
        <Link href='/'>
          <div className='p-2 text-2xl'>🍣</div>
        </Link>
      </div>
    </main>
  )
}

export default Page
