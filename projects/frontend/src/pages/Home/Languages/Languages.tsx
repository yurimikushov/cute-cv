import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import noop from 'lodash/noop'
import H from 'components/H'
import Button from 'components/Button'
import Language from './Language'
import LanguagesPropsT from './Languages.props'

const languages = ['English', '']

const Languages: FC<LanguagesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      {map(languages, (language) => (
        <Language language={language} onChange={noop} onDelete={noop} />
      ))}
      <Button className='block mx-auto mt-2' onClick={noop}>
        Add
      </Button>
    </div>
  )
}

export default Languages
