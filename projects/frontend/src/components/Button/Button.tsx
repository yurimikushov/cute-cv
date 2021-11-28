import { FC } from 'react'
import styled from 'styled-components'
import ButtonPropsT from './Button.props'

const Button: FC<ButtonPropsT> = styled.button.attrs(
  ({ withPaddings = true }: ButtonPropsT) => ({
    type: 'button',
    withPaddings,
  })
)`
  ${({ withPaddings }) => (withPaddings ? 'padding-left: 0.5rem;' : '')}
  ${({ withPaddings }) => (withPaddings ? 'padding-right: 0.5rem;' : '')}
  color: #73808d;
  line-height: 1.25rem;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

export default Button
