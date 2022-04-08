type VersionProps = {
  className?: string
  name: string
  current: boolean
  allowShare: boolean
  disabled: boolean
  onSelectCv: () => void
  onUpdateCvMetadata: (name: string, allowShare: boolean) => Promise<void>
  onMakeCvCopy: (name: string, allowShare: boolean) => void
  onDelete: () => void
}

export default VersionProps
