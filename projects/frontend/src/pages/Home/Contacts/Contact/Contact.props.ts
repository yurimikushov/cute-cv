type ContactPropsT = {
  className?: string
  text: string
  reference: string
  onTextChange: (text: string) => void
  onReferenceChange: (reference: string) => void
  onDelete: () => void
}

export default ContactPropsT
