import {
  ForwardRefRenderFunction,
  forwardRef,
  useImperativeHandle,
  ChangeEvent,
} from 'react'
import styled, { css } from 'styled-components'
import trim from 'lodash/trim'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import focusMixin from 'styles/mixins/focus'
import useElementWidth from './hooks/useElementWidth'
import TextInputPropsT from './TextInput.props'

const textInputMixin = css<Pick<TextInputPropsT, 'size'>>`
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
  ${textInputMixin}
  ${focusMixin}

  padding: 0.25rem 0.25rem 0.125rem;
  border: 1px solid ${colors.gray200};
  border-radius: ${radiuses.sm};

  &::placeholder {
    color: black;
    opacity: 0.5;
  }
`

// Should use `div` element coz `html2pdf.js` package can't correctly convert `input` content
// But should do it correctly: on the old app ver input content renders correctly
// Should find bug and fix it
const DisabledTextInput = styled.div`
  ${textInputMixin}
`

const TextInput: ForwardRefRenderFunction<HTMLInputElement, TextInputPropsT> = (
  { disabled = false, size = 'md', value, placeholder, onChange, ...props },
  externalRef
) => {
  const { ref, width, handleWidthChange } = useElementWidth<HTMLInputElement>(
    [value, disabled],
    { extraSpace: 3 /* fixes right side padding */ }
  )

  useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleWidthChange()
    onChange(e.target.value)
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
      ref={ref}
      type='text'
      // @ts-expect-error bad typing
      size={size}
      value={value}
      placeholder={placeholder}
      style={{ width }}
      onChange={handleChange}
    />
  )
}

export default forwardRef(TextInput)
