type HeaderProps = {
  className?: string
  fullName: string
  position: string
  fullNameMaxLength?: number
  positionMaxLength?: number
} & (
  | {
      editable: boolean
      onChangeFullName: (value: string) => void
      onChangePosition: (value: string) => void
    }
  | {
      editable: false
      onChangeFullName?: never
      onChangePosition?: never
    }
)

export default HeaderProps
