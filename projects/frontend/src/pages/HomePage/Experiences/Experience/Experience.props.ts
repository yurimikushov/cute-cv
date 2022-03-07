type ExperienceProps = {
  className?: string
  position: string
  company: string
  duration: string
  description: string
  onPositionChange: (position: string) => void
  onCompanyChange: (company: string) => void
  onDurationChange: (duration: string) => void
  onDescriptionChange: (description: string) => void
  onDelete: () => void
}

export default ExperienceProps
