import { useRef, useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import { TextInputPropsT } from './TextInput.props'
import './TextInput.css'

const TextInput = ({
  size = 'sm',
  value,
  onChange,
  ...props
}: TextInputPropsT) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputWidth, setInputWidth] = useState('auto')

  useEffect(() => {
    if (isNil(inputRef.current)) {
      return
    }

    setInputWidth(`${inputRef.current.scrollWidth}px`)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputWidth('auto')
    onChange(e.target.value as string)
  }

  return (
    <input
      {...props}
      ref={inputRef}
      className={cn(
        'p-2 max-w-full text-black rounded',
        'border border-solid border-gray-100',
        'focus:outline-none focus:shadow-sm',
        {
          'input--size-sm': size === 'sm',
          'input--size-md': size === 'md',
          'input--size-lg': size === 'lg',
          'input--size-xl': size === 'xl',
          'input--size-2xl': size === '2xl',
        }
      )}
      type='text'
      value={value}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={handleChange}
    />
  )
}

export default TextInput
