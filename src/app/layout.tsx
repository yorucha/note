import '~/app/globals.css'

import type { Metadata } from 'next'
import type React from 'react'

import GithubCorner from '~/components/githubCorner'
import { APP_NAME } from '~/constants'

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
    <html lang='ja'>
      <body>
        <GithubCorner/>
        {children}
      </body>
    </html>
  )
}
