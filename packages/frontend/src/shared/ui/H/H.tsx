import styled, { css } from 'styled-components'
import colors from 'shared/styles/colors'
import fonts from 'shared/styles/fonts'

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

export { H1, H2 }
