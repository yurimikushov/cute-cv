import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
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
      <button
        className={cn(
          'absolute top-1.5 right-2.5',
          'w-3.5 h-3.5',
          'text-gray-200 hover:text-gray-300 cursor-pointer'
        )}
        type='button'
        onClick={onDelete}
      >
        <CloseIcon />
      </button>
    </Card>
  )
}

export default Contact
