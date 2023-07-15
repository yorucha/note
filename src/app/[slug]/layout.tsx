import type React from 'react'

import RootLayout from '~/app/layout'

export default function Layout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <RootLayout>{children}</RootLayout>
  )
}
