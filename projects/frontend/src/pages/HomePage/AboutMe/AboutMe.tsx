import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable, useAboutMe } from 'services/cv'
import TextArea from 'components/TextArea'

const Description = styled(TextArea)`
  width: 100%;
`

const AboutMe: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'aboutMe' })
  const { editable } = useEditable()
  const { aboutMe, handleChange } = useAboutMe()

  return (
    <Description
      disabled={!editable}
      value={aboutMe}
      placeholder={t('placeholder')}
      onChange={(aboutMe) => handleChange({ aboutMe })}
    />
  )
}

export default AboutMe
