type ContactPropsT = {
  className?: string
  text: string
  href: string
  onTextChange: (text: string) => void
  onHrefChange: (href: string) => void
  onDelete: () => void
}

export default ContactPropsT