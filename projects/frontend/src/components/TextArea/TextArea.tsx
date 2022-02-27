import { ChangeEvent, FC } from 'react'
import styled, { css } from 'styled-components'
import trim from 'lodash/trim'
import mdToJsx from 'lib/mdToJsx'
import colors from 'styles/colors'
import radiuses from 'styles/radiuses'
import focusMixin from 'styles/mixins/focus'
import useElementHeight from './hooks/useElementHeight'
import TextAreaPropsT from './TextArea.props'

const textAreaMixin = css`
  max-width: 100%;
  background-color: ${colors.white};
  color: ${colors.black};
`

const EditableTextArea = styled.textarea`
  ${textAreaMixin}
  ${focusMixin}

  padding: 0.25rem 0.375rem 0.5rem;
  border-radius: ${radiuses.sm};
  border: 1px solid ${colors.gray200};
  resize: none;
  overflow: hidden;

  &::placeholder {
    color: ${colors.black};
    opacity: 0.5;
  }
`

// Should use `div` element coz `html2pdf.js` package can't correctly convert `textarea` content
const DisabledTextArea = styled.div`
  ${textAreaMixin}

  white-space: pre-line;
`

const TextArea: FC<TextAreaPropsT> = ({
  disabled = false,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const { ref, height, handleHeightChange } =
    useElementHeight<HTMLTextAreaElement>([value, disabled])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleHeightChange()
    onChange(e.target.value)
  }

  if (disabled) {
    return (
      <DisabledTextArea {...props}>
        {mdToJsx(trim(value) || placeholder || '')}
      </DisabledTextArea>
    )
  }

  return (
    <EditableTextArea
      {...props}
      ref={ref}
      value={value}
      placeholder={placeholder}
      rows={2}
      style={{ height }}
      onChange={handleChange}
    />
  )
}

export default TextArea
