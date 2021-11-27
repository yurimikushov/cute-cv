import {
  ForwardRefRenderFunction,
  forwardRef,
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  ChangeEvent,
} from 'react'
import styled from 'styled-components'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import TextInputPropsT from './TextInput.props'

const StyledTextInput = styled.input<TextInputPropsT>`
  padding: 0.25rem 0.25rem 0.125rem;
  max-width: 100%;
  background-color: #fff;
  color: #000;
  line-height: 1.25;
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

  ${({ disabled }) =>
    (disabled &&
      `
    padding: 0;
    border: none;
    cursor: text;

    &::placeholder {
      opacity: 1;
    }
  `) ||
    ''}

  ${({ size }) => `
    ${(size === 'sm' && 'font-size: 0.9rem;') || ''}
    ${(size === 'md' && 'font-size: 1rem;') || ''}
    ${(size === 'lg' && 'font-size: 1.15rem;') || ''}
    ${(size === 'xl' && 'font-size: 1.7rem;') || ''}
    ${(size === '2xl' && 'font-size: 2rem;') || ''}
  `}
`

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputPropsT> = (
  { disabled, size = 'md', value, onChange, ...props },
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
    // @ts-expect-error bad typing
    <StyledTextInput
      {...props}
      ref={inputRef}
      type='text'
      size={size}
      disabled={disabled}
      value={disabled ? trim(value) : value}
      style={{ width: inputWidth, maxWidth: '100%' }}
      onChange={handleChange}
    />
  )
}

export default forwardRef(TextInput)
