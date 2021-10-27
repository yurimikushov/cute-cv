import { HTMLProps } from 'react'

type AvatarPickerPropsT = HTMLProps<HTMLDivElement> & {
  src: string | null
  onPick: (src: string) => void
}

export default AvatarPickerPropsT
