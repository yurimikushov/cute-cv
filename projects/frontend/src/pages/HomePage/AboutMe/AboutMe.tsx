import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import {
  useEditable,
  useCurrentCvContent,
  ABOUT_ME_MAX_LENGTH,
} from 'services/cv'
import TextArea from 'components/TextArea'

const Description = styled(TextArea)`
  width: 100%;
`

const AboutMe: FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'aboutMe' })
  const { editable } = useEditable()
  const {
    cv: { aboutMe },
    changeAboutMe,
  } = useCurrentCvContent()

  return (
    <Description
      disabled={!editable}
      value={aboutMe}
      placeholder={t('placeholder')}
      maxLength={ABOUT_ME_MAX_LENGTH}
      onChange={changeAboutMe}
    />
  )
}

export default AboutMe
