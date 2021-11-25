import { FC, useRef, useState, useLayoutEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import trim from 'lodash/trim'
import mdToJsx from 'lib/mdToJsx'
import TextAreaPropsT from './TextArea.props'
import './TextArea.css'

const TextArea: FC<TextAreaPropsT> = ({
  className,
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

  // Should use `div` element coz `html2pdf.js` package can't correctly convert `textarea` content
  if (disabled) {
    return (
      <div className={cn(className, 'text-area text-area--disabled')}>
        {mdToJsx(isEmpty(value) ? placeholder ?? '' : trim(value))}
      </div>
    )
  }

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      className={cn(className, 'text-area')}
      value={value}
      placeholder={placeholder}
      rows={2}
      style={{ height: textAreaHeight }}
      onChange={handleChange}
    />
  )
}

export default TextArea
