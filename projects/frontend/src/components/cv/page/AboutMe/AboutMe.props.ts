type AboutMeProps = {
  className?: string
  value: string
  maxLength?: number
} & (
  | {
      editable: boolean
      onChange: (value: string) => void
    }
  | {
      editable: false
      onChange?: never
    }
)

export default AboutMeProps
