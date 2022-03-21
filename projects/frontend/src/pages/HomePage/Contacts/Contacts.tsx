import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import {
  useEditable,
  useCurrentCvContent,
  CONTACTS_MAX_COUNT,
} from 'services/cv'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import { H2 } from 'components/ui/H'
import DndList from 'components/ui/DndList'
import Button from 'components/ui/Button'
import radiuses from 'styles/radiuses'
import Contact from './Contact'
import ContactsProps from './Contacts.props'

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

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Contacts: FC<ContactsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()
  const {
    cv: { contacts },
    addContact,
    changeContact,
    reorderContact,
    deleteContact,
  } = useCurrentCvContent()

  useLayoutEffectWhen(addContact, isEmpty(contacts))

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderContact}>
        {map(contacts, ({ id, text, href }) => (
          <DraggableItem key={id}>
            <Contact
              text={text}
              href={href}
              onTextChange={(text) => changeContact(id, text, href)}
              onHrefChange={(href) => changeContact(id, text, href)}
              onDelete={() => deleteContact(id)}
            />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && size(contacts) < CONTACTS_MAX_COUNT && (
        <Add appearance='text' onClick={addContact}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Contacts
