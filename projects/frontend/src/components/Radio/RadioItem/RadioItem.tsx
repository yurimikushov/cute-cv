import { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import focusMixin from 'styles/mixins/focus'
import RadioItemProps from './RadioItem.props'

const Item = styled.li<RadioItemProps>`
  ${focusMixin}

  color: ${({ isActive }) => (isActive ? colors.black : colors.gray300)};
  cursor: default;
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
  const handleClick = () => {
    if (isActive || disabled) {
      return
    }

    onClick()
  }

  const handleKeyDown = ({ code }: KeyboardEvent) => {
    if (code === 'Space' || code === 'Enter') {
      handleClick()
    }
  }

  return (
    <Item
      {...props}
      isActive={isActive}
      disabled={disabled}
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive || disabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </Item>
  )
}

export default RadioItem
