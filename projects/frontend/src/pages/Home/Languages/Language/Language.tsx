import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { ReactComponent as CloseIcon } from 'icons/close.svg'
import TextInput from 'components/TextInput'
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
      <button
        className={cn(
          'absolute top-1.5 right-1.5',
          'w-3.5 h-3.5',
          'text-gray-200 hover:text-gray-300 cursor-pointer'
        )}
        type='button'
        onClick={onDelete}
      >
        <CloseIcon />
      </button>
    </div>
  )
}

export default Language
