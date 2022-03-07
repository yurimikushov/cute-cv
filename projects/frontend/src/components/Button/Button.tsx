import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import focusMixin from 'styles/mixins/focus'
import ButtonProps from './Button.props'

// @ts-expect-error bad typing
const Button: FC<ButtonProps> = styled.button.attrs(
  ({
    type = 'button',
    withPaddings = true,
    disabled = false,
  }: ButtonProps) => ({
    type,
    withPaddings,
    disabled,
  })
)`
  ${focusMixin}

  ${({ withPaddings }) => withPaddings && 'padding-left: 0.5rem;'}
  ${({ withPaddings }) => withPaddings && 'padding-right: 0.5rem;'}
  color: ${colors.gray300};
  line-height: 1.25rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    ${({ disabled }) => !disabled && `color: ${colors.black};`}
  }
`

export default Button
