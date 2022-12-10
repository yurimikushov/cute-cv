type TechnologiesProps = {
  className?: string
  technologies: string
  maxLength?: number
} & (
  | {
      editable: boolean
      onChange: (technologies: string) => void
    }
  | {
      editable: false
      onChange?: never
    }
)

export default TechnologiesProps
