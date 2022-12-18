import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import noop from 'shared/lib/noop'
import size from 'lodash/size'
import map from 'lodash/map'
import { H2 } from 'shared/ui/H'
import DndList from 'shared/ui/DndList'
import Button from 'shared/ui/Button'
import radiuses from 'shared/styles/radiuses'
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

const Contacts: FC<ContactsProps> = ({
  editable,
  contacts,
  maxCount = Number.MAX_SAFE_INTEGER,
  textMaxLength,
  hrefMaxLength,
  onChange = noop,
  onReorder = noop,
  onDelete = noop,
  onAdd,
  ...props
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <DraggableList isDndDisabled={!editable} onDragEnd={onReorder}>
        {map(contacts, ({ id, text, href }) => (
          <DraggableItem key={id}>
            <Contact
              editable={editable}
              text={text}
              href={href}
              textMaxLength={textMaxLength}
              hrefMaxLength={hrefMaxLength}
              onTextChange={(text) => onChange(id, text, href)}
              onHrefChange={(href) => onChange(id, text, href)}
              onDelete={() => onDelete(id)}
            />
          </DraggableItem>
        ))}
      </DraggableList>
      {editable && size(contacts) < maxCount && (
        <Add appearance='text' onClick={onAdd}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Contacts
