import { FC, useRef, useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import isEmpty from 'lodash/isEmpty'
import trim from 'lodash/trim'
import mdToJsx from 'lib/mdToJsx'
import TextAreaPropsT from './TextArea.props'

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

  useEffect(() => {
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
      <div className='max-w-full bg-white text-black whitespace-pre-line'>
        {mdToJsx(isEmpty(value) ? placeholder ?? '' : trim(value))}
      </div>
    )
  }

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      className={cn(
        className,
        'px-1.5 py-1 max-w-full rounded',
        'bg-white text-black  leading-tight',
        'border border-solid border-gray-200',
        'resize-none overflow-hidden',
        'placeholder-black placeholder-opacity-50',
        'focus:outline-none focus:shadow-sm'
      )}
      value={value}
      placeholder={placeholder}
      rows={2}
      style={{ height: textAreaHeight }}
      onChange={handleChange}
    />
  )
}

export default TextArea
