type HeaderProps = {
  className?: string
  editable: boolean
  fullName: string
  position: string
  fullNameMaxLength: number
  positionMaxLength: number
  onChangeFullName: (value: string) => void
  onChangePosition: (value: string) => void
}

export default HeaderProps
