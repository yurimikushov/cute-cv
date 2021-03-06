import { FC } from 'react'
import {
  useEditable,
  useCurrentCvAboutMe,
  ABOUT_ME_MAX_LENGTH,
} from 'services/edit-cv'
import AboutMe from 'shared/ui/cv/page/AboutMe'

const AboutMeContainer: FC = () => {
  const { editable } = useEditable()
  const { aboutMe, changeAboutMe } = useCurrentCvAboutMe()

  return (
    <AboutMe
      editable={editable}
      value={aboutMe}
      maxLength={ABOUT_ME_MAX_LENGTH}
      onChange={changeAboutMe}
    />
  )
}

export default AboutMeContainer
