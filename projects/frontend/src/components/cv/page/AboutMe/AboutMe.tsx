import { FC, ChangeEvent } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import TextArea from 'components/ui/TextArea'
import AboutMeProps from './AboutMe.props'

const Description = styled(TextArea)`
  width: 100%;
  ${({ readonly }) => !readonly && 'min-height: 5rem;'}
`

const AboutMe: FC<AboutMeProps> = ({ editable, onChange, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'aboutMe' })

  const handleChangeAboutMe = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <Description
      {...props}
      readonly={!editable}
      placeholder={t('placeholder')}
      onChange={handleChangeAboutMe}
    />
  )
}

export default AboutMe
