import { Container, Paper } from '@mui/material'

import type { MarkdownProps } from '~/components/markdown'
import { Markdown } from '~/components/markdown'

const Note = ({ children }: MarkdownProps) => (
  <Container maxWidth='md' sx={{ my: 4 }}>
    <Paper variant='outlined' sx={{ py: 3, px: 2, borderRadius: '6px' }}>
      <Markdown>{children}</Markdown>
    </Paper>
  </Container>
)

export { Note }
