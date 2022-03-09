type EditEditCvModalProps = {
  className?: string
  title?: string
  submitTitle?: string
  submitSubmittingTitle?: string
  initialName?: string
  onSubmit: (name: string) => void | Promise<void>
  onClose: () => void
}

export default EditEditCvModalProps
