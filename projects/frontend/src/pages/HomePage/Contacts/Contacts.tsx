import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import {
  useEditable,
  useCurrentCvContent,
  MAX_CONTACTS_SIZE,
} from 'services/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { H2 } from 'components/H'
import DndList from 'components/DndList'
import Button from 'components/Button'
import Contact from './Contact'
import ContactsPropsT from './Contacts.props'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 0.5rem;
  }
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Contacts: FC<ContactsPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()
  const {
    cv: { contacts },
    addContact,
    changeContact,
    reorderContact,
    deleteContact,
  } = useCurrentCvContent()

  useEffectWhen(addContact, isEmpty(contacts))

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderContact}>
        {map(contacts, ({ id, text, href }) => (
          <DraggableList.Item key={id}>
            <Contact
              text={text}
              href={href}
              onTextChange={(text) => changeContact(id, text, href)}
              onHrefChange={(href) => changeContact(id, text, href)}
              onDelete={() => deleteContact(id)}
            />
          </DraggableList.Item>
        ))}
      </DraggableList>
      {editable && size(contacts) < MAX_CONTACTS_SIZE && (
        <Add onClick={addContact}>{t('add')}</Add>
      )}
    </Container>
  )
}

export default Contacts
