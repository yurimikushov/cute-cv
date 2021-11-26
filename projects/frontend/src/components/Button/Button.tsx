import { FC } from 'react'
import styled from 'styled-components'
import ButtonPropsT from './Button.props'

const StyledButton = styled.button<ButtonPropsT>`
  ${({ withPaddings }) =>
    withPaddings &&
    `
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  `}
  color: #73808d;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

const Button: FC<ButtonPropsT> = ({ children, ...props }) => (
  // @ts-expect-error bad typing
  <StyledButton {...props} type='button'>
    {children}
  </StyledButton>
)

export default Button
