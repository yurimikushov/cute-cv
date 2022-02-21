import { ReactElement } from 'react'
import { RadioItemProps } from './RadioItem'

type RadioProps = {
  className?: string
  value: string
  disabled?: boolean
  vertical?: boolean
  children: Array<ReactElement<RadioItemProps>>
  onChange: (value: string) => void
}

export default RadioProps
