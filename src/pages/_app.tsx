import 'normalize.css'

import { AppBar, Box, Container, Toolbar } from '@mui/material'
import type { AppProps } from 'next/app'
import { IBM_Plex_Sans_JP, Roboto } from 'next/font/google'
import Image from 'next/image'

import icon from '~/assets/github-mark.svg'
import theme from '~/theme/mui'

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
          box-sizing: border-box;
        }
      `}</style>
      <main css={{ background: theme.palette.background.default }}>
        <AppBar
          variant='elevation'
          elevation={0}
          color='transparent'
          position='static'
          sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar variant='dense'>
            <Container maxWidth='lg' sx={{ display: 'flex' }}>
              <Box ml='auto'>
                <a href={GithubURL} target='_blank' rel='noopener noreferrer'>
                  <Image
                    alt='logo'
                    height={24}
                    width={24}
                    src={icon}
                  />
                </a>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
        <Component {...pageProps} />
      </main>
    </>
  )
}
