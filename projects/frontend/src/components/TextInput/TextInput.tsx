import { FC, useRef, useState, useLayoutEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import TextInputPropsT from './TextInput.props'

const TextInput: FC<TextInputPropsT> = ({
  className,
  disabled,
  size = 'md',
  value,
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputWidth, setInputWidth] = useState('auto')

  useLayoutEffect(() => {
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
        `${disabled ? '' : 'px-1 pt-1 pb-0.5'}`,
        'max-w-full rounded',
        'bg-white text-black leading-tight',
        size === 'sm' ? 'text-sm' : '',
        size === 'md' ? 'text-md' : '',
        size === 'lg' ? 'text-lg' : '',
        size === 'xl' ? 'text-xl' : '',
        size === '2xl' ? 'text-2xl' : '',
        'border border-solid border-gray-200',
        'placeholder-black placeholder-opacity-50',
        'focus:outline-none focus:shadow-sm',
        'disabled:placeholder-opacity-100 disabled:bg-white disabled:border-0'
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
