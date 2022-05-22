import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'
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

CloseButton.displayName = 'CloseButton'

export default CloseButton
