import { FC } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import RadioItemProps from './RadioItem.props'

const Item = styled.button<RadioItemProps>`
  color: ${({ isActive }) => (isActive ? colors.black : colors.gray300)};
  ${({ isActive }) => !isActive && 'cursor: pointer;'}
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}

  &:hover {
    ${({ isActive, disabled }) =>
      !isActive && !disabled && `color: ${colors.black};`}
  }
`

const RadioItem: FC<RadioItemProps> = ({
  isActive,
  disabled,
  children,
  onClick,
  ...props
}) => {
  return (
    <Item
      {...props}
      isActive={isActive}
      disabled={disabled}
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive || disabled ? -1 : 0}
      onClick={onClick}
    >
      {children}
    </Item>
  )
}

export default RadioItem
