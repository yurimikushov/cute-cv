type VersionProps = {
  className?: string
  name: string
  allowShare: boolean
  disabled: boolean
  onUpdateCvMetadata: (name: string, allowShare: boolean) => Promise<void>
  onMakeCvCopy: (name: string, allowShare: boolean) => void
  onDelete: () => void
}

export default VersionProps
