import { FC } from 'react'
import styled from 'styled-components'
import HrefProps from './Href.props'

// @ts-expect-error bad typing
const Href: FC<HrefProps> = styled.a.attrs({
  rel: 'noreferrer',
  target: '_blank',
})``

export default Href
