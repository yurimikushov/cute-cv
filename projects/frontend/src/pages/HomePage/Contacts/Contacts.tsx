import { FC, useLayoutEffect } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { useEditable, useContacts } from 'services/cv'
import { H2 } from 'components/H'
import Button from 'components/Button'
import Contact from './Contact'
import ContactsPropsT from './Contacts.props'

const Contacts: FC<ContactsPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()
  const {
    contacts,
    handleAdd,
    handleTextChange,
    handleHrefChange,
    handleDelete,
  } = useContacts()

  useLayoutEffect(() => {
    if (isEmpty(contacts)) {
      handleAdd()
    }
  }, [isEmpty(contacts)])

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
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
      {editable && (
        <Button className='block mx-auto mt-2' onClick={handleAdd}>
          Add
        </Button>
      )}
    </div>
  )
}

export default Contacts
