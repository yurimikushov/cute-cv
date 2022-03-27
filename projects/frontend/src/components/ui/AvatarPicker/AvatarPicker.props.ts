type AvatarPickerProps = {
  className?: string
  src: string | null
} & (
  | {
      editable: boolean
      onPick: (src: string) => void
      onClear: () => void
    }
  | {
      editable: false
      onPick?: never
      onClear?: never
    }
)

export default AvatarPickerProps
