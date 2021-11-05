import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import ContactPropsT from './Contact.props'

const Contact: FC<ContactPropsT> = ({
  className,
  text,
  reference,
  onTextChange,
  onReferenceChange,
  onDelete,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })

  return (
    <Card className={cn(className, 'relative p-1.5 childs-mt-1')}>
      <TextInput
        className='block min-w-full'
        value={text}
        placeholder={t('text.placeholder')}
        onChange={onTextChange}
      />
      <TextInput
        className='block min-w-full'
        value={reference}
        placeholder={t('reference.placeholder')}
        onChange={onReferenceChange}
      />
      <CloseButton className='absolute top-1.5 right-2.5' onClick={onDelete} />
    </Card>
  )
}

export default Contact
