type ContactProps = {
  className?: string
  editable: boolean
  text: string
  href: string
  textMaxLength: number
  hrefMaxLength: number
  onTextChange: (text: string) => void
  onHrefChange: (href: string) => void
  onDelete: () => void
}

export default ContactProps
