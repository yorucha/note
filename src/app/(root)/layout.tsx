/* eslint-disable-next-line camelcase */
import { Zen_Maru_Gothic } from 'next/font/google'
import type React from 'react'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${zenMaruGothic.className}`}>
      {children}
    </div>
  )
}
