import { HTMLProps } from 'react'

type HPropsT = HTMLProps<HTMLHeadingElement> & {
  tag: '1' | '2'
}

export default HPropsT
