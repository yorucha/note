'use client'

import type { ComponentProps } from 'react'
import GithubCorner from 'react-github-corner'

import { GITHUB_URL, theme } from '~/constants'

export default function ClientComponent (props: ComponentProps<typeof GithubCorner>) {
  return <GithubCorner href={GITHUB_URL} octoColor='#fff' bannerColor={theme.palette.primary} {...props}/>
}
