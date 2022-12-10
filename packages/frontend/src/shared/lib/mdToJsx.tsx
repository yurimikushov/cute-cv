import { FC } from 'react'
import { compiler } from 'markdown-to-jsx'

const Href: FC = ({ children, ...props }) => (
  <a {...props} target='_blank'>
    {children}
  </a>
)

const mdToJsx = (text: string): ReturnType<typeof compiler> =>
  compiler(text, {
    overrides: {
      a: Href,
    },
  })

export default mdToJsx
