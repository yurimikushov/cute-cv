import { HTMLProps } from 'react'

type AvatarPickerPropsT = HTMLProps<HTMLDivElement> & {
  editable?: boolean
  src: string | null
  onPick: (src: string) => void
  onClear: () => void
}

export default AvatarPickerPropsT
