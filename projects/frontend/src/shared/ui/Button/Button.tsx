import { FC } from 'react'
import styled from 'styled-components'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'
import ButtonProps from './Button.props'

const Button: FC<ButtonProps> = styled.button.attrs(
  ({
    type = 'button',
    appearance,
    withoutPaddings = false,
    disabled = false,
  }: ButtonProps) => ({
    type,
    isOutlined: appearance === 'outlined',
    withoutPaddings,
    disabled,
  })
)`
  ${focusMixin}

  color: ${colors.gray300};
  line-height: 1.25rem;
  border-radius: ${radiuses.sm};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  ${({ isOutlined }) =>
    isOutlined &&
    `
    padding: 0.25rem 0.5rem;
    border: 1px solid ${colors.gray200};
  `}

  ${({ withoutPaddings }) => withoutPaddings && 'padding: 0;'}

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
      color: ${colors.black};
      border-color: ${colors.gray300};
    `}
  }
`

Button.displayName = 'Button'

export default Button
