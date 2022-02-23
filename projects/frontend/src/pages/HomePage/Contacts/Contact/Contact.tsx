import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable } from 'services/cv'
import Card from 'components/Card'
import Href from 'components/Href'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import ContactPropsT from './Contact.props'

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

const Contact: FC<ContactPropsT> = ({
  text,
  href,
  onTextChange,
  onHrefChange,
  onDelete,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()

  if (!editable) {
    return <Href href={href || '/'}>{text || 'Contact'}</Href>
  }

  return (
    <Container {...props} hoverable>
      <Text
        disabled={!editable}
        value={text}
        placeholder={t('text.placeholder')}
        maxLength={50}
        onChange={onTextChange}
      />
      <Reference
        disabled={!editable}
        value={href}
        placeholder={t('reference.placeholder')}
        maxLength={50}
        onChange={onHrefChange}
      />
      {editable && <Close onClick={onDelete} />}
    </Container>
  )
}

export default Contact
