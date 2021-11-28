import { FC } from 'react'
import styled, { css } from 'styled-components'
import colors from 'styles/colors'
import HPropsT from './H.props'

const HMixin = css`
  color: ${colors.gray300};
  letter-spacing: 0.025em;
`

const H1 = styled.h1`
  ${HMixin}
  font-size: 0.77rem;
  text-transform: uppercase;
`
const H2 = styled.h1`
  ${HMixin}
  font-size: 0.9rem;
  font-weight: bold;
`

const H: FC<HPropsT> = ({ tag, children, ...props }) => {
  switch (tag) {
    case '1':
      return <H1 {...props}>{children}</H1>
    case '2':
      return <H2 {...props}>{children}</H2>
    default:
      throw new Error('[H] missing `tag`, this is required prop')
  }
}

export default H
export { H1, H2 }
