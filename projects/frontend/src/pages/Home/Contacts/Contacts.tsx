import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import noop from 'lodash/noop'
import H from 'components/H'
import Button from 'components/Button'
import Contact from './Contact'
import ContactsPropsT from './Contacts.props'

const contacts = [
  {
    text: 'example@server.com',
    reference: 'mailto:example@server.com',
  },
  {
    text: '',
    reference: '',
  },
]

const Contacts: FC<ContactsPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      {map(contacts, ({ text, reference }) => (
        <Contact
          key={text}
          text={text}
          reference={reference}
          onTextChange={noop}
          onReferenceChange={noop}
          onDelete={noop}
        />
      ))}
      <Button className='block mx-auto mt-2' onClick={noop}>
        Add
      </Button>
    </div>
  )
}

export default Contacts
