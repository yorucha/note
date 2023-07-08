import 'normalize.css'

import type { AppProps } from 'next/app'
import { IBM_Plex_Sans_JP, Roboto } from 'next/font/google'
import GithubCorner from 'react-github-corner'

import theme from '~/theme/main'

const GithubURL = 'https://github.com/yorucha/note'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

const IBMPlexSansJP = IBM_Plex_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily}, ${IBMPlexSansJP.style.fontFamily};
          font-size: 16px;
        }
        body {
          color: ${theme.palette.text.primary}
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
      <main css={{ background: '#fefefe' }}>
        <GithubCorner href={GithubURL} bannerColor={theme.palette.primary.main}/>
        <Component {...pageProps} />
      </main>
    </>
  )
}
