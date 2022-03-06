type EditNameModalProps = {
  className?: string
  name: string
  onSave: (name: string) => Promise<void>
  onClose: () => void
}

export default EditNameModalProps
