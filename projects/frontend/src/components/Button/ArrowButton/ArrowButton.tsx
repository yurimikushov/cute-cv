import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowBottomIcon } from 'icons/arrow-bottom.svg'
import colors from 'styles/colors'
import focusMixin from 'styles/mixins/focus'
import ArrowButtonProps from './ArrowButton.props'

const ArrowButton: FC<ArrowButtonProps> = styled.button.attrs({
  children: <ArrowBottomIcon />,
})`
  ${focusMixin}

  width: 0.9rem;
  height: 0.9rem;
  color: ${colors.gray200};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${colors.gray300};
  }
`

export default ArrowButton
