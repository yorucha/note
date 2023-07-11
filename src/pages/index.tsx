import fs from 'fs'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import path from 'path'

import { Note } from '~/components/note'
import { APP_NAME } from '~/constants'

type Props = {
  contents: string
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const fullPath = path.join(process.cwd(), 'README.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  return {
    props: {
      contents: fileContents
    }
  }
}

const Page: NextPage<Props> = (props) => {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name='description' content='No meta description.'/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>
        <Note>{props.contents}</Note>
      </main>
    </>
  )
}

export default Page
