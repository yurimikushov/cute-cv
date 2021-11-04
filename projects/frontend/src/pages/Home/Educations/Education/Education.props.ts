type EducationPropsT = {
  className?: string
  degree: string
  university: string
  duration: string
  onDegreeChange: (degree: string) => void
  onUniversityChange: (university: string) => void
  onDurationChange: (duration: string) => void
  onDelete: () => void
}

export default EducationPropsT
