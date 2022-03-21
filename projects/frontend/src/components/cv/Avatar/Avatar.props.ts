type AvatarProps = {
  className?: string
  src: string | null
  editable: boolean
  onPick: (src: string) => void
  onClear: () => void
}

export default AvatarProps
