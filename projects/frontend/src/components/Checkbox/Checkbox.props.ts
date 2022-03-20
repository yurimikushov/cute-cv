import { ChangeEvent } from 'react'

type CheckboxProps = {
  className?: string
  value: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default CheckboxProps
