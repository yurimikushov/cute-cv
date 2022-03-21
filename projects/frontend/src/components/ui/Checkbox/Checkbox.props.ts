import { ChangeEvent } from 'react'

type CheckboxProps = {
  className?: string
  id?: string
  name?: string
  value: boolean
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default CheckboxProps
