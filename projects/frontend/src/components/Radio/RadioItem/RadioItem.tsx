import { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'
import colors from 'styles/colors'
import RadioItemPropsT from './RadioItem.props'

const Label = styled.label<RadioItemPropsT>`
  color: ${({ isActive }) => (isActive ? colors.black : colors.gray300)};
  ${({ isActive }) => !isActive && 'cursor: pointer;'}
  ${({ disabled }) => disabled && 'cursor: not-allowed;'}

  &:hover {
    ${({ isActive, disabled }) =>
      !isActive && !disabled && `color: ${colors.black};`}
  }
`

const RadioItem: FC<RadioItemPropsT> = ({
  isActive,
  option,
  disabled,
  onChange,
  ...props
}) => {
  const handleKeyDown = ({ code }: KeyboardEvent) => {
    if (code === 'Space' || code === 'Enter') {
      onChange(option)
    }
  }

  const handleClick = () => {
    onChange(option)
  }

  return (
    // @ts-expect-error bad typing
    <Label
      {...props}
      isActive={isActive}
      disabled={disabled}
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive || disabled ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {option}
    </Label>
  )
}

export default RadioItem
