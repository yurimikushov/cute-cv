type ExperiencePropsT = {
  className?: string
  position: string
  company: string
  duration: string
  description: string
  onPositionChange: (position: string) => void
  onCompanyChange: (company: string) => void
  onDurationChange: (onDurationChange: string) => void
  onDescriptionChange: (description: string) => void
  onDelete: () => void
}

export default ExperiencePropsT
