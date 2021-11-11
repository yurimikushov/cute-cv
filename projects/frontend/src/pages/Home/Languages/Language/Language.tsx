import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useEditable } from 'services/app'
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
  const { editable } = useEditable()

  return (
    <div
      className={cn(className, 'relative', `${editable ? '' : 'leading-5'}`)}
    >
      <TextInput
        className='min-w-full'
        disabled={!editable}
        value={language}
        placeholder={t('placeholder')}
        onChange={onChange}
      />
      {editable && (
        <CloseButton
          className='absolute top-1.5 right-1.5'
          onClick={onDelete}
        />
      )}
    </div>
  )
}

export default Language
