import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
import focusMixin from 'styles/mixins/focus'
import CloseButtonProps from './CloseButton.props'

const CloseButton: FC<CloseButtonProps> = styled.button.attrs({
  type: 'button',
  children: <CloseIcon />,
})`
  ${focusMixin}

  width: 0.875rem;
  height: 0.875rem;
  color: ${colors.gray200};
  border-radius: ${radiuses.sm};
  cursor: pointer;
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}

  &:hover {
    color: ${colors.gray300};
  }
`

export default CloseButton
