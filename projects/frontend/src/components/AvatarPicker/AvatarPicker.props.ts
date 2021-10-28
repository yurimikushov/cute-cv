import { HTMLProps } from 'react'

type AvatarPickerPropsT = HTMLProps<HTMLDivElement> & {
  src: string | null
  onPick: (src: string | null) => void
}

export default AvatarPickerPropsT
