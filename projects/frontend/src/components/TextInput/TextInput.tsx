import { FC, useRef, useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import TextInputPropsT from './TextInput.props'
import './TextInput.css'

const TextInput: FC<TextInputPropsT> = ({
  className,
  disabled,
  size = 'sm',
  value,
  onChange,
  ...props
}) => {
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
        className,
        'px-1 py-0.5 max-w-full rounded',
        'bg-white text-black leading-tight',
        'border border-solid border-gray-100',
        'focus:outline-none focus:shadow-sm',
        'disabled:placeholder-black disabled:bg-white disabled:border-0',
        {
          'input--size-sm': size === 'sm',
          'input--size-md': size === 'md',
          'input--size-lg': size === 'lg',
          'input--size-xl': size === 'xl',
          'input--size-2xl': size === '2xl',
        }
      )}
      type='text'
      disabled={disabled}
      value={disabled ? trim(value) : value}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={handleChange}
    />
  )
}

export default TextInput
