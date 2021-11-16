import { FC, KeyboardEvent } from 'react'
import cn from 'classnames'
import RadioItemPropsT from './RadioItem.props'

const RadioItem: FC<RadioItemPropsT> = ({
  className,
  isActive,
  option,
  onChange,
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
    <label
      key={option}
      className={cn(
        className,
        `${
          isActive
            ? 'text-black'
            : 'text-gray-300 hover:text-black cursor-pointer'
        }`
      )}
      // eslint-disable-next-line no-magic-numbers
      tabIndex={isActive ? -1 : 0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
    >
      {option}
      <input className='hidden' type='radio' value={option} />
    </label>
  )
}

export default RadioItem
