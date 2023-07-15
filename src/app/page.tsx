import { Note } from '~/components/note'
import { getReadme } from '~/lib/posts'

const Page = async () => {
  const contents = await getReadme()
  return (
    <main>
      <Note>{contents}</Note>
    </main>
  )
}

export default Page
