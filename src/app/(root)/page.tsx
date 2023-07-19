/* eslint-disable-next-line camelcase */
import { Zen_Maru_Gothic } from 'next/font/google'

import { Gallery } from '~/components/gallery'
import Hero from '~/components/svg/hero'
import { getPostsName } from '~/lib/posts'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

const Page = async () => {
  const paths = await getPostsName()
  const dummy = Array.from(Array(30 - paths.length)).map(() => ({ title: '準備中', href: '/' }))

  const data = [...paths.map(p => ({ title: p.slug, href: `./${p.slug}` })), ...dummy]
  return (
    <main className={`${zenMaruGothic.className}`}>
      <div className='flex h-[480px] items-center justify-center bg-red-50 sm:h-[640px]'>
        <Hero className='h-60 w-60 sm:h-80 sm:w-80'/>
      </div>
      <div className={'p-8'}>
        <div className='mb-2 text-xl'>記事一覧</div>
        <Gallery data={data}/>
      </div>
    </main>
  )
}

export default Page
