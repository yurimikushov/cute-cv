import { FC } from 'react'
import styled from 'styled-components'
import HrefPropsT from './Href.props'

// @ts-expect-error bad typing
const Href: FC<HrefPropsT> = styled.a.attrs({
  rel: 'noreferrer',
  target: '_blank',
})``

export default Href
