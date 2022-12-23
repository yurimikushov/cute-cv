import { KeyboardEvent, useRef } from 'react'
import CheckboxProps from '../Checkbox.props'

const useCheckbox = ({
  className,
  id,
  name,
  value,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const checkboxInputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: KeyboardEvent) => {
    const { code } = e

    if (code === 'Space') {
      e.preventDefault()
      checkboxInputRef.current?.click()
    }
  }

  return {
    containerProps: {
      className,
      disabled,
    },
    checkboxInputProps: {
      ref: checkboxInputRef,
      id,
      name,
      value: String(value),
      disabled,
      onChange,
    },
    checkmarkProps: {
      value,
      tabIndex: disabled ? -1 : 0,
      disabled,
      onKeyDown: handleKeyDown,
    },
  }
}

export default useCheckbox
