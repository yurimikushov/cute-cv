type EditNameModalProps = {
  className?: string
  name: string
  isSaving: boolean
  onSave: (name: string) => void
  onClose: () => void
}

export default EditNameModalProps
