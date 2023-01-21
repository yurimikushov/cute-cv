import { FC } from 'react'
import styled from 'styled-components'
import radiuses from 'shared/styles/radiuses'
import DndList from 'shared/ui/DndList'
import {
  useEditable,
  useCurrentCvContacts,
  CONTACTS_MAX_COUNT,
} from 'services/edit-cv'
import Contacts from 'shared/ui/cv/page/Contacts'
import ContactContainer from './ContactContainer'

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`
const ContactsContainer: FC = () => {
  const { editable } = useEditable()
  const { contacts = [], addContact, reorderContacts } = useCurrentCvContacts()

  return (
    <Contacts>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderContacts}>
        {contacts.map((id) => (
          <DraggableItem key={id}>
            <ContactContainer id={id} />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && contacts.length < CONTACTS_MAX_COUNT && (
        <Contacts.AddButton onClick={addContact} />
      )}
    </Contacts>
  )
}

export default ContactsContainer
