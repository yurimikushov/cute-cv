import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
import focusMixin from 'styles/mixins/focus'
import ButtonProps from './Button.props'

// @ts-expect-error bad typing
const Button: FC<ButtonProps> = styled.button.attrs(
  ({
    type = 'button',
    appearance = 'outlined',
    withPaddings = true,
    disabled = false,
  }: ButtonProps) => ({
    type,
    isOutlined: appearance === 'outlined',
    withPaddings,
    disabled,
  })
)`
  ${focusMixin}

  color: ${colors.gray300};
  line-height: 1.25rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ isOutlined }) =>
    isOutlined &&
    `
    padding: 0.25rem 0.5rem;
    border: 1px solid ${colors.gray200};
    border-radius: ${radiuses.sm};
  `}

  ${({ withPaddings }) => !withPaddings && 'padding: 0;'}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      color: ${colors.black};
      border-color: ${colors.gray300};
    `}
  }
`

export default Button
