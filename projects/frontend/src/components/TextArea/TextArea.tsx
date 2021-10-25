import { useRef, useState, useEffect, ChangeEvent } from 'react'
import cn from 'classnames'
import isNil from 'lodash/isNil'
import { TextAreaPropsT } from './TextArea.props'

const TextArea = ({ className, value, onChange, ...props }: TextAreaPropsT) => {
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

  return (
    <textarea
      {...props}
      ref={textAreaRef}
      className={cn(
        className,
        'px-1.5 py-1 max-w-full bg-white text-black rounded',
        'border border-solid border-gray-100',
        'resize-none overflow-hidden',
        'focus:outline-none focus:shadow-sm'
      )}
      value={value}
      rows={1}
      style={{ height: textAreaHeight }}
      onChange={handleChange}
    />
  )
}

export default TextArea
