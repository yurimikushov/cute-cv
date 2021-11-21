import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { useEditable, useTechnologies } from 'services/cv'
import H from 'components/H'
import TextArea from 'components/TextArea'
import TechnologiesPropsT from './Technologies.props'

const Technologies: FC<TechnologiesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'technologies' })
  const { editable } = useEditable()
  const { technologies, handleChange } = useTechnologies()

  return (
    <div className={cn(className, 'childs-mt-2')} {...props}>
      <H tag='2'>{t('title')}</H>
      <TextArea
        className='text-sm'
        disabled={!editable}
        value={technologies}
        placeholder={t('placeholder')}
        onChange={(technologies) => handleChange({ technologies })}
      />
    </div>
  )
}

export default Technologies
