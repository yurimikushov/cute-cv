type ExperienceProps = {
  className?: string
  editable?: boolean
  position: string
  company: string
  duration: string
  description: string
  positionMaxLength?: number
  companyMaxLength?: number
  durationMaxLength?: number
  descriptionMaxLength?: number
  onPositionChange?: (position: string) => void
  onCompanyChange?: (company: string) => void
  onDurationChange?: (duration: string) => void
  onDescriptionChange?: (description: string) => void
  onDelete?: () => void
}

export default ExperienceProps
