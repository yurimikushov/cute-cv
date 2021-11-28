type AvatarPickerPropsT = {
  className?: string
  editable?: boolean
  src: string | null
  onPick: (src: string) => void
  onClear: () => void
}

export default AvatarPickerPropsT
