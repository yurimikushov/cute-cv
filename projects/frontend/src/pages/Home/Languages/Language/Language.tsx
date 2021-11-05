import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import TextInput from 'components/TextInput'
import { CloseButton } from 'components/Button'
import LanguagePropsT from './Language.props'

const Language: FC<LanguagePropsT> = ({
  className,
  language,
  onChange,
  onDelete,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <div className={cn(className, 'relative')}>
      <TextInput
        className='min-w-full'
        value={language}
        placeholder={t('placeholder')}
        onChange={onChange}
      />
      <CloseButton className='absolute top-1.5 right-1.5' onClick={onDelete} />
    </div>
  )
}

export default Language
