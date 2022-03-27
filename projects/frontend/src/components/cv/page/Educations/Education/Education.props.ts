type EducationProps = {
  className?: string
  editable: boolean
  degree: string
  university: string
  duration: string
  degreeMaxLength: number
  universityMaxLength: number
  durationMaxLength: number
  onDegreeChange: (degree: string) => void
  onUniversityChange: (university: string) => void
  onDurationChange: (duration: string) => void
  onDelete: () => void
}

export default EducationProps
