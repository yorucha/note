import type { MarkdownProps } from '~/components/markdown'
import { Markdown } from '~/components/markdown'

const Note = ({ children }: MarkdownProps) => (
  <div className={'mx-auto my-8 w-full px-4 sm:px-6 lg:max-w-screen-lg'}>
    <div className={'rounded-md border border-gray-200 bg-white px-4 py-6'}>
      <Markdown>{children}</Markdown>
    </div>
  </div>
)

export { Note }
