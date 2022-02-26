import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import colors from 'styles/colors'
import CloseButtonPropsT from './CloseButton.props'

const CloseButton: FC<CloseButtonPropsT> = styled.button.attrs({
  type: 'button',
  children: <CloseIcon />,
})`
  width: 0.875rem;
  height: 0.875rem;
  color: ${colors.gray200};
  cursor: pointer;
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}

  &:hover {
    color: ${colors.gray300};
  }
`

export default CloseButton
