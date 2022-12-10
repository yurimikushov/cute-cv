import { css } from 'styled-components'
import colors from 'shared/styles/colors'

const focusMixin = css`
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 1px ${colors.white}, 0 0 0 3.5px ${colors.gray300};
  }
`

export default focusMixin
