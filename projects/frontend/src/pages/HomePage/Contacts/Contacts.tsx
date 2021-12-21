import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import { useEditable, useContacts, MAX_CONTACTS_SIZE } from 'services/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { H2 } from 'components/H'
import Button from 'components/Button'
import Contact from './Contact'
import ContactsPropsT from './Contacts.props'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Contacts: FC<ContactsPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()
  const {
    contacts,
    handleAdd,
    handleTextChange,
    handleHrefChange,
    handleDelete,
  } = useContacts()

  useEffectWhen(handleAdd, isEmpty(contacts))

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {map(contacts, ({ id, text, href }) => (
        <Contact
          key={id}
          text={text}
          href={href}
          onTextChange={(text) => handleTextChange({ id, text })}
          onHrefChange={(href) => handleHrefChange({ id, href })}
          onDelete={() => handleDelete({ id })}
        />
      ))}
      {editable && size(contacts) < MAX_CONTACTS_SIZE && (
        <Add onClick={handleAdd}>Add</Add>
      )}
    </Container>
  )
}

export default Contacts
