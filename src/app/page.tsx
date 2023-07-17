/* eslint-disable-next-line camelcase */
import { Zen_Maru_Gothic } from 'next/font/google'

import Hero from '~/assets/hero.svg'
import { Gallery } from '~/components/gallery'
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
    <main>
      <div className='flex h-[640px] items-center justify-center bg-red-50'>
        <Hero className='[&_#hero-svg-text]:origin-center  [&_#hero-svg-text]:animate-spin-reverse'/>
      </div>
      <div className={`p-8 ${zenMaruGothic.className}`}>
        <div className='mb-2 text-xl'>記事一覧</div>
        <Gallery data={data}/>
      </div>
    </main>
  )
}

export default Page
