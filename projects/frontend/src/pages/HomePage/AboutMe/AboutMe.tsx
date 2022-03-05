import { FC, ChangeEvent } from 'react'
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

  const handleChangeAboutMe = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeAboutMe(e.target.value)
  }

  return (
    <Description
      readonly={!editable}
      value={aboutMe}
      placeholder={t('placeholder')}
      maxLength={ABOUT_ME_MAX_LENGTH}
      onChange={handleChangeAboutMe}
    />
  )
}

export default AboutMe
