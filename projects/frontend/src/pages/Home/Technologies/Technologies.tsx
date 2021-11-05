import { FC, useState } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import H from 'components/H'
import TextArea from 'components/TextArea'
import TechnologiesPropsT from './Technologies.props'

const Technologies: FC<TechnologiesPropsT> = ({ className, ...props }) => {
  const [technologies, setTechnologies] = useState('')
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      <TextArea
        className='text-sm'
        value={technologies}
        placeholder={t('placeholder')}
        onChange={setTechnologies}
      />
    </div>
  )
}

export default Technologies
