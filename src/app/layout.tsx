import '~/app/globals.css'

import type { Metadata } from 'next'
/* eslint-disable-next-line camelcase */
import { IBM_Plex_Sans_JP, Roboto } from 'next/font/google'
import type React from 'react'

import GithubCorner from '~/components/githubCorner'
import { APP_NAME } from '~/constants'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-roboto'
})

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-ibm-plex-sans-jp'
})

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'No meta description.',
  icons: {
    icon: './favicon.ico'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja' className={`${roboto.variable} ${IBMPlexSansJP.variable}`}>
      <body>
        <GithubCorner/>
        {children}
      </body>
    </html>
  )
}
