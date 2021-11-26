import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import CloseButtonPropsT from './CloseButton.props'

const StyledCloseButton = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  color: #adadad;
  cursor: pointer;

  &:hover {
    color: #73808d;
  }
`

const CloseButton: FC<CloseButtonPropsT> = (props) => (
  // @ts-expect-error bad typing
  <StyledCloseButton {...props} type='button'>
    <CloseIcon />
  </StyledCloseButton>
)

export default CloseButton
