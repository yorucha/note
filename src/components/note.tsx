import type { MarkdownProps } from '~/components/markdown'
import { Markdown } from '~/components/markdown'

const Note = ({ children }: MarkdownProps) => (
  <div css={{
    boxSizing: 'border-box',
    maxWidth: 900,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 32,
    marginBottom: 32,
    paddingLeft: 24,
    paddingRight: 24
  }}>
    <div css={{
      background: '#fff',
      '-webkit-transition': 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      borderRadius: '6px',
      border: '1px solid',
      borderColor: 'rgba(0,0,0,0.12)',
      paddingLeft: 8,
      paddingRight: 8
    }}>
      <Markdown>{children}</Markdown>
    </div>
  </div>
)

export { Note }
