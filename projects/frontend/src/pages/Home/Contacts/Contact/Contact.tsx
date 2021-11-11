import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useEditable } from 'services/app'
import Card from 'components/Card'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import ContactPropsT from './Contact.props'

const Contact: FC<ContactPropsT> = ({
  className,
  text,
  href,
  onTextChange,
  onHrefChange,
  onDelete,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'contacts' })
  const { editable } = useEditable()

  if (!editable) {
    return (
      <a
        className='block text-gray-300 hover:text-black leading-5'
        href={href || '/'}
        rel='noreferrer'
        target='_blank'
      >
        {text || 'Contact'}
      </a>
    )
  }

  return (
    <Card className={cn(className, 'relative p-1.5 childs-mt-1')}>
      <TextInput
        className='block min-w-full'
        disabled={!editable}
        value={text}
        placeholder={t('text.placeholder')}
        onChange={onTextChange}
      />
      <TextInput
        className='block min-w-full'
        disabled={!editable}
        value={href}
        placeholder={t('reference.placeholder')}
        onChange={onHrefChange}
      />
      {editable && (
        <CloseButton
          className='absolute top-1.5 right-2.5'
          onClick={onDelete}
        />
      )}
    </Card>
  )
}

export default Contact
