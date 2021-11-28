import { FC, KeyboardEvent } from 'react'
import styled from 'styled-components'
import RadioItemPropsT from './RadioItem.props'

const Label = styled.label<RadioItemPropsT>`
  color: ${({ isActive }) => (isActive ? '#000' : '#73808d')};
  ${({ isActive }) => !isActive && 'cursor: pointer;'}

  &:hover {
    ${({ isActive }) => !isActive && 'color: #000;'}
  }
`

const HiddenInput = styled.input`
  display: none;
`

const RadioItem: FC<RadioItemPropsT> = ({
  isActive,
  option,
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
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {option}
      <HiddenInput type='radio' value={option} />
    </Label>
  )
}

export default RadioItem
