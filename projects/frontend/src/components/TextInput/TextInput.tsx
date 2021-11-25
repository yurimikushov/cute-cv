import {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  ChangeEvent,
} from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import TextInputPropsT from './TextInput.props'
import './TextInput.css'

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputPropsT> = (
  { className, disabled, size = 'md', value, onChange, ...props },
  externalRef
) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inputWidth, setInputWidth] = useState('auto')

  useImperativeHandle(externalRef, () => inputRef.current as HTMLInputElement)

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
      className={cn(className, 'text-input', {
        'text-input--disabled': disabled,
        'text-input--size-sm': size === 'sm',
        'text-input--size-md': size === 'md',
        'text-input--size-lg': size === 'lg',
        'text-input--size-xl': size === 'xl',
        'text-input--size-2xl': size === '2xl',
      })}
      type='text'
      disabled={disabled}
      value={disabled ? trim(value) : value}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={handleChange}
    />
  )
}

export default forwardRef(TextInput)
