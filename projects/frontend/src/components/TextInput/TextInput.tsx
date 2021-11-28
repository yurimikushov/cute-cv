import {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  ChangeEvent,
} from 'react'
import styled, { css } from 'styled-components'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import TextInputPropsT from './TextInput.props'

const BaseTextInputMixin = css<Pick<TextInputPropsT, 'size'>>`
  max-width: 100%;
  background-color: #fff;
  color: #000;

  ${({ size }) => `
    ${(size === 'sm' && 'font-size: 0.9rem;') || ''}
    ${(size === 'md' && 'font-size: 1rem;') || ''}
    ${(size === 'lg' && 'font-size: 1.15rem;') || ''}
    ${(size === 'xl' && 'font-size: 1.7rem;') || ''}
    ${(size === '2xl' && 'font-size: 2rem;') || ''}
  `}
`

const EditableTextInput = styled.input`
  ${BaseTextInputMixin}
  padding: 0.25rem 0.25rem 0.125rem;
  border: 1px solid #adadad;
  border-radius: 3px;

  &::placeholder {
    color: black;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 0 #c7c7c7;
  }
`

// Should use `div` element coz `html2pdf.js` package can't correctly convert `textarea` content
// But should do it correctly: on the old app ver input content renders correctly
// Should find bug and fix it
const DisabledTextInput = styled.div`
  ${BaseTextInputMixin}
`

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputPropsT> = (
  { disabled, size = 'md', value, placeholder, onChange, ...props },
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

  if (disabled) {
    return (
      <DisabledTextInput {...props} size={size}>
        {trim(value) || placeholder || ''}
      </DisabledTextInput>
    )
  }

  return (
    <EditableTextInput
      {...props}
      ref={inputRef}
      type='text'
      // @ts-expect-error bad typing
      size={size}
      value={value}
      placeholder={placeholder}
      style={{ width: inputWidth }}
      onChange={handleChange}
    />
  )
}

export default forwardRef(TextInput)
