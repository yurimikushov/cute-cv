import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Card from 'components/ui/Card'
import Href from 'components/ui/Href'
import TextInput from 'components/ui/TextInput'
import { CloseButton } from 'components/ui/Button'
import ContactProps from './Contact.props'

const Container = styled(Card)`
  position: relative;
  padding: 0.375rem;

  & > * + * {
    margin-top: 0.25rem;
  }
`

const Text = styled(TextInput)`
  padding-right: 1.25rem;
  display: block;
  min-width: 100%;
`

const Reference = styled(TextInput)`
  display: block;
  min-width: 100%;
`

const Close = styled(CloseButton)`
  position: absolute;
  top: 0.5rem;
  right: 0.65rem;
`

const Contact: FC<ContactProps> = ({
  editable,
  text,
  href,
  textMaxLength,
  hrefMaxLength,
  onTextChange,
  onHrefChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    onTextChange(e.target.value)
  }

  const handleChangeHref = (e: ChangeEvent<HTMLInputElement>) => {
    onHrefChange(e.target.value)
  }

  if (!editable) {
    return <Href href={href || '/'}>{text || 'Contact'}</Href>
  }

  return (
    <Container {...props} hoverable>
      <Text
        readonly={!editable}
        value={text}
        placeholder={t('text.placeholder')}
        maxLength={textMaxLength}
        onChange={handleChangeText}
      />
      <Reference
        readonly={!editable}
        value={href}
        placeholder={t('reference.placeholder')}
        maxLength={hrefMaxLength}
        onChange={handleChangeHref}
      />
      {editable && <Close onClick={onDelete} />}
    </Container>
  )
}

export default Contact
