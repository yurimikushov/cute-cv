import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TextArea from 'components/TextArea'

const AboutMe: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'aboutMe' })
  const [aboutMe, setAboutMe] = useState('')

  return (
    <TextArea
      className='w-full'
      value={aboutMe}
      placeholder={t('placeholder')}
      onChange={setAboutMe}
    />
  )
}

export default AboutMe
