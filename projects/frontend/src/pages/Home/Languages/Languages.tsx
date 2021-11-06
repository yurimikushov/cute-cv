import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import { useLanguages } from 'services/languages'
import H from 'components/H'
import Button from 'components/Button'
import Language from './Language'
import LanguagesPropsT from './Languages.props'

const Languages: FC<LanguagesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })
  const { languages, handleAdd, handleUpdate, handleDelete } = useLanguages()

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      {map(languages, ({ id, language }) => (
        <Language
          key={id}
          language={language}
          onChange={(language) => handleUpdate(id, language)}
          onDelete={() => handleDelete(id)}
        />
      ))}
      <Button className='block mx-auto mt-2' onClick={handleAdd}>
        Add
      </Button>
    </div>
  )
}

export default Languages
