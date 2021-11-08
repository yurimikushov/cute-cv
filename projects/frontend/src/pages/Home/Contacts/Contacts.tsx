import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import { useContacts } from 'services/cv'
import H from 'components/H'
import Button from 'components/Button'
import Contact from './Contact'
import ContactsPropsT from './Contacts.props'

const Contacts: FC<ContactsPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { contacts, handleAdd, handleUpdate, handleDelete } = useContacts()

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      {map(contacts, ({ id, text, href }) => (
        <Contact
          key={id}
          text={text}
          href={href}
          onTextChange={(text) => handleUpdate({ id, text, href })}
          onHrefChange={(href) => handleUpdate({ id, text, href })}
          onDelete={() => handleDelete({ id })}
        />
      ))}
      <Button className='block mx-auto mt-2' onClick={handleAdd}>
        Add
      </Button>
    </div>
  )
}

export default Contacts
