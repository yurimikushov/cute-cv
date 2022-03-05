type VersionProps = {
  className?: string
  name: string
  disabled: boolean
  onUpdateCvName: (name: string) => Promise<void>
  onDelete: () => void
}

export default VersionProps
