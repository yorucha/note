import Image from 'next/image'
import Link from 'next/link'
import type React from 'react'
import { Components } from 'react-markdown'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import queryString from '~/utils/queryString'

const components: Components = {
  img: ({ src, alt }) => {
    if (!src) return (<></>)
    const [orig, query] = src.split('?')
    const parsed = queryString.parse(query)

    const w = parsed.width || parsed.w || null
    const h = parsed.height || parsed.h || null

    const width = w && parseInt(w)
    const height = h && parseInt(h)

    if (width && height) {
      return (
        <Image
          src={orig}
          alt={alt ?? ''}
          width={width}
          height={height}
        />
      )
    } else {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} />
      )
    }
  },
  a: ({ href, children }) => {
    if (href?.startsWith('/') || href === '') {
      return (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      )
    } else {
      return (
        <a href={href} target='_blank' rel='noopener noreferrer'>
          {children}
        </a>
      )
    }
  }
}

const Styled = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='mx-auto break-words font-normal
    leading-6 tracking-[0.01em]
    [&_a:hover]:underline [&_a]:py-1 [&_a]:text-[#0366d6] [&_a]:no-underline
    [&_blockquote]:my-2 [&_blockquote]:border-l-4 [&_blockquote]:px-4 [&_blockquote]:text-gray-600/90
    [&_h1]:my-3 [&_h1]:flex [&_h1]:items-center [&_h1]:border-b [&_h1]:border-neutral-200 [&_h1]:pb-1 [&_h1]:text-2xl
    [&_h1_img]:mx-2 [&_h1_img]:inline
    [&_h2]:my-3 [&_h2]:flex [&_h2]:items-center [&_h2]:border-b [&_h2]:border-neutral-200 [&_h2]:pb-1 [&_h2]:text-2xl
    [&_h2_img]:mx-2 [&_h2_img]:inline
    [&_h3]:my-3 [&_h3]:flex [&_h3]:items-center [&_h3]:border-b [&_h3]:border-neutral-200 [&_h3]:pb-1 [&_h3]:text-2xl
    [&_h3_img]:mx-2 [&_h3_img]:inline
    [&_h4]:my-3 [&_h4]:flex [&_h4]:items-center [&_h4]:border-b [&_h4]:border-neutral-200 [&_h4]:pb-1 [&_h4]:text-2xl
    [&_h4_img]:mx-2 [&_h4_img]:inline
    [&_h5]:my-3 [&_h5]:flex [&_h5]:items-center [&_h5]:border-b [&_h5]:border-neutral-200 [&_h5]:pb-1 [&_h5]:text-2xl
    [&_h5_img]:mx-2 [&_h5_img]:inline
    [&_h6]:my-3 [&_h6]:flex [&_h6]:items-center [&_h6]:border-b [&_h6]:border-neutral-200 [&_h6]:pb-1 [&_h6]:text-2xl
    [&_h6_img]:mx-2 [&_h6_img]:inline
    [&_li+li]:mt-1 [&_ul]:my-4 [&_ul]:list-[circle] [&_ul]:pl-10
    '>
      {children}
    </div>
  )
}

type MarkdownProps = {
  children: string
}

const Markdown = ({ children }: MarkdownProps) => {
  return (
    <Styled>
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {children}
      </ReactMarkdown>
    </Styled>
  )
}

export { Markdown }
export type { MarkdownProps }
