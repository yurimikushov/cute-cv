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
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import shadows from 'styles/shadows'
import TextInputPropsT from './TextInput.props'

const BaseTextInputMixin = css<Pick<TextInputPropsT, 'size'>>`
  max-width: 100%;
  background-color: ${colors.white};
  color: ${colors.black};

  ${({ size }) => `
    ${(size === 'sm' && `font-size: ${fonts.size.sm};`) || ''}
    ${(size === 'md' && `font-size: ${fonts.size.md};`) || ''}
    ${(size === 'lg' && `font-size: ${fonts.size.lg};`) || ''}
    ${(size === 'xl' && `font-size: ${fonts.size.xl};`) || ''}
    ${(size === '2xl' && `font-size: ${fonts.size['2xl']};`) || ''}
  `}
`

const EditableTextInput = styled.input`
  ${BaseTextInputMixin}
  padding: 0.25rem 0.25rem 0.125rem;
  border: 1px solid ${colors.gray200};
  border-radius: 3px;

  &::placeholder {
    color: black;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: ${shadows.sm};
  }
`

// Should use `div` element coz `html2pdf.js` package can't correctly convert `input` content
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
