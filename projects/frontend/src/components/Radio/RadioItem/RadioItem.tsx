import { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import RadioItemProps from './RadioItem.props'

const Label = styled.label<RadioItemProps>`
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
  const handleKeyDown = (e: KeyboardEvent) => {
    const { code } = e

    if (code === 'Space' || code === 'Enter') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <Label
      {...props}
      isActive={isActive}
      disabled={disabled}
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive || disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={onClick}
    >
      {children}
    </Label>
  )
}

export default RadioItem
