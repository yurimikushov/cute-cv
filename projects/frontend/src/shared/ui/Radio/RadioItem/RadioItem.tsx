import { FC, KeyboardEvent, useRef } from 'react'
import styled from 'styled-components'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'
import RadioItemProps from './RadioItem.props'

const Item = styled.li<RadioItemProps>`
  ${focusMixin}

  color: ${({ isActive }) => (isActive ? colors.black : colors.gray300)};
  border-radius: ${radiuses.sm};
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
  const itemRef = useRef<HTMLLIElement>(null)

  const handleClick = () => {
    if (isActive || disabled) {
      return
    }

    onClick()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const { target, code } = e

    if (target !== itemRef.current) {
      return
    }

    if (code === 'Space' || code === 'Enter') {
      e.preventDefault()
      handleClick()
    }
  }

  return (
    <Item
      {...props}
      ref={itemRef}
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
