import { FC, useRef, useState, useLayoutEffect, ChangeEvent } from 'react'
import styled, { css } from 'styled-components'
import isNil from 'lodash/isNil'
import trim from 'lodash/trim'
import mdToJsx from 'lib/mdToJsx'
import TextAreaPropsT from './TextArea.props'

const BaseTextAreaMixin = css`
  max-width: 100%;
  background-color: #fff;
  color: #000;
`

const EditableTextArea = styled.textarea`
  ${BaseTextAreaMixin}
  padding: 0.25rem 0.375rem 0.5rem;
  border-radius: 3px;
  border: 1px solid #adadad;
  resize: none;
  overflow: hidden;

  &::placeholder {
    color: #000;
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 0 #c7c7c7;
  }
`

// Should use `div` element coz `html2pdf.js` package can't correctly convert `textarea` content
const DisabledTextArea = styled.div`
  ${BaseTextAreaMixin}
  white-space: pre-line;
`

const TextArea: FC<TextAreaPropsT> = ({
  disabled,
  value,
  placeholder,
  onChange,
  ...props
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [textAreaHeight, setTextAreaHeight] = useState('auto')

  useLayoutEffect(() => {
    if (isNil(textAreaRef.current)) {
      return
    }

    setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`)
  }, [value])

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaHeight('auto')
    onChange(e.target.value as string)
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
      ref={textAreaRef}
      value={value}
      placeholder={placeholder}
      rows={2}
      style={{ height: textAreaHeight }}
      onChange={handleChange}
    />
  )
}

export default TextArea
