import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useEditable } from 'services/app'
import { useAboutMe } from 'services/cv'
import TextArea from 'components/TextArea'

const AboutMe: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'aboutMe' })
  const { editable } = useEditable()
  const { aboutMe, handleChange } = useAboutMe()

  return (
    <TextArea
      className='w-full'
      disabled={!editable}
      value={aboutMe}
      placeholder={t('placeholder')}
      onChange={(aboutMe) => handleChange({ aboutMe })}
    />
  )
}

export default AboutMe
