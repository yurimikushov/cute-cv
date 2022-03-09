type VersionProps = {
  className?: string
  name: string
  disabled: boolean
  onUpdateCvName: (name: string) => Promise<void>
  onMakeCvCopy: (name: string) => void
  onDelete: () => void
}

export default VersionProps
