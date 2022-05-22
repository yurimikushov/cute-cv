type EditCvMetadataModalProps = {
  className?: string
  title?: string
  submitTitle?: string
  submitSubmittingTitle?: string
  initialName?: string
  initialAllowShare?: boolean
  onSubmit: (name: string, allowShare: boolean) => void | Promise<void>
  onClose: () => void
}

export default EditCvMetadataModalProps
