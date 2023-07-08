import Image from 'next/image'
import Link from 'next/link'
import queryString, { ParsedQuery } from 'query-string'
import { Components } from 'react-markdown'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

import theme from '~/theme/main'

const components: Components = {
  img: ({ src, alt }) => {
    if (!src) return (<></>)
    const [, query] = src.split('?')
    const parsed = queryString.parse(query)

    const w = parsed.width || parsed.w
    const h = parsed.height || parsed.h

    const toNumber = (q: ParsedQuery[keyof ParsedQuery]) => {
      if (Array.isArray(q)) {
        return q[0] ? parseInt(q[0]) : null
      }
      return q ? parseInt(q) : null
    }

    const width = toNumber(w)
    const height = toNumber(h)

    if (width && height) {
      return (
        <Image
          src={src}
          alt={alt ?? ''}
          width={width}
          height={height}
        />
      )
    } else {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt}/>
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

type MarkdownProps = {
  children: string
}

const Markdown = ({ children }: MarkdownProps) => (
  <div css={{
    maxWidth: 1012,
    marginRight: 'auto',
    marginLeft: 'auto',
    padding: '24px 16px',
    fontWeight: 400,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
    wordWrap: 'break-word',
    '& h1,h2,h3,h4,h5,h6': {
      paddingBottom: '0.2em',
      borderBottom: '1px solid #eaecef',
      '& img': {
        marginRight: '0.3em',
        marginLeft: '0.3em'
      }
    },
    '& h1': {
      fontSize: '1.5rem',
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em'
    },
    '& h2,h3,h4,h5,h6': {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.334,
      letterSpacing: '0.0075em'
    },
    /*
    '& ul': {
      listStyle: 'none',
      paddingInlineStart: 'calc(40px - 1.4em)',
      '& li': {
        paddingLeft: '1.4em',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
        backgroundSize: '1em',
        backgroundImage: 'url("")'
      }
    },
    */
    '& ul': {
      listStyleType: 'circle'
    },
    '& li+li': {
      marginTop: '0.25em'
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }}>
    <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
  </div>
)

export { Markdown }
