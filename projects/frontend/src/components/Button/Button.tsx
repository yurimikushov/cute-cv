import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import ButtonPropsT from './Button.props'

// @ts-expect-error bad typing
const Button: FC<ButtonPropsT> = styled.button.attrs(
  ({ withPaddings = true, disabled = false }: ButtonPropsT) => ({
    type: 'button',
    withPaddings,
    disabled,
  })
)`
  ${({ withPaddings }) => (withPaddings ? 'padding-left: 0.5rem;' : '')}
  ${({ withPaddings }) => (withPaddings ? 'padding-right: 0.5rem;' : '')}
  color: ${colors.gray300};
  line-height: 1.25rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${({ disabled }) => (!disabled && `color: ${colors.black};`) || ''}
  }
`

export default Button
