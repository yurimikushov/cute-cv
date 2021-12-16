type RadioPropsT = {
  className?: string
  activeOption: string
  options: Array<string>
  disabled?: boolean
  onChange: (activeOption: string) => void
}

export default RadioPropsT
