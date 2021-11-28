import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import CloseButtonPropsT from './CloseButton.props'

const CloseButton: FC<CloseButtonPropsT> = styled.button.attrs({
  type: 'button',
  children: <CloseIcon />,
})`
  width: 0.875rem;
  height: 0.875rem;
  color: #adadad;
  cursor: pointer;

  &:hover {
    color: #73808d;
  }
`

export default CloseButton
