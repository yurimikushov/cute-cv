import { FC } from 'react'
import styled, { css } from 'styled-components'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import HProps from './H.props'

const HMixin = css`
  color: ${colors.gray300};
  letter-spacing: 0.025em;
`

const H1 = styled.h1`
  ${HMixin}
  font-size: ${fonts.size.xs};
  text-transform: uppercase;
`

H1.displayName = 'H1'

const H2 = styled.h1`
  ${HMixin}
  font-size: ${fonts.size.sm};
  font-weight: bold;
`

H2.displayName = 'H2'

const H: FC<HProps> = ({ tag, children, ...props }) => {
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
