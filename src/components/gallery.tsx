'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef } from 'react'
import { VirtuosoGrid } from 'react-virtuoso'

type GalleryProps = {
  data: {
    title?: string
    href: string
   }[]
}

const Gallery = ({ data }: GalleryProps) => {
  return (
    <VirtuosoGrid
      style={{ height: 800, width: '100%' }}
      useWindowScroll
      data={data}
      totalCount={data.length}
      overscan={{ main: 0, reverse: 200 }}
      components={{
        Item: ({ className, ...props }) => (
          <div {...props} className={`${className} w-full p-2 sm:w-1/2 lg:w-1/3`}/>
        ),
        List: forwardRef(function List ({ className, children, ...props }, ref) {
          return (
          <div ref={ref} {...props} className={`${className} flex flex-wrap`}>{children}</div>
          )
        })
      }}
      itemContent={(i, data) => {
        return (
          <Link href={data.href}>
            <div className='relative'>
              <div className='flex h-24 animate-fade-in items-center border border-gray-200  bg-white '>
                <div className='mx-3'>
                  <Image src={`/assets/sushi_${(i % 6) + 1}.png`} height={40} width={40} quality={100} alt='icon' />
                </div>
                <div className='flex items-center text-xl'>{data.title ?? data.href}</div>
              </div>
              <div className='absolute left-0 top-0 h-full w-full bg-neutral-950/5 opacity-0 transition-opacity hover:opacity-100'></div>
            </div>
          </Link>
        )
      }}
    />
  )
}

export { Gallery }
