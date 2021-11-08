import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useTechnologies } from 'services/cv'
import H from 'components/H'
import TextArea from 'components/TextArea'
import TechnologiesPropsT from './Technologies.props'

const Technologies: FC<TechnologiesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })
  const { technologies, handleUpdate } = useTechnologies()

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      <TextArea
        className='text-sm'
        value={technologies}
        placeholder={t('placeholder')}
        onChange={(technologies) => handleUpdate({ technologies })}
      />
    </div>
  )
}

export default Technologies
