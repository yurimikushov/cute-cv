import { FC } from 'react'
import isUndefined from 'lodash/isUndefined'
import { CV_CONTAINER_ID } from 'services/download-cv'
import { useSharableCv } from 'services/share-cv'
import CvLayout from 'layouts/CvLayout'
import Header from 'shared/ui/cv/page/Header'
import Avatar from 'shared/ui/cv/page/Avatar'
import AboutMe from 'shared/ui/cv/page/AboutMe'
import Experiences from 'shared/ui/cv/page/Experiences'
import Educations from 'shared/ui/cv/page/Educations'
import Contacts from 'shared/ui/cv/page/Contacts'
import Technologies from 'shared/ui/cv/page/Technologies'
import Languages from 'shared/ui/cv/page/Languages'
import CvContainerProps from './CvContainer.props'

const CvContainer: FC<CvContainerProps> = ({ id, ...props }) => {
  const { data: cv } = useSharableCv(id)

  if (isUndefined(cv)) {
    return null
  }

  const { content } = cv
  const {
    fullName,
    position,
    avatar,
    aboutMe,
    experiences,
    educations,
    contacts,
    technologies,
    languages,
  } = content

  return (
    <CvLayout
      {...props}
      id={CV_CONTAINER_ID}
      header={
        <Header editable={false} fullName={fullName} position={position} />
      }
      avatar={<Avatar editable={false} src={avatar} />}
      main={
        <>
          <AboutMe editable={false} value={aboutMe} />
          <Experiences editable={false} experiences={experiences} />
          <Educations editable={false} educations={educations} />
        </>
      }
      aside={
        <>
          <Contacts editable={false} contacts={contacts} />
          <Technologies editable={false} technologies={technologies} />
          <Languages editable={false} languages={languages} />
        </>
      }
    />
  )
}

export default CvContainer
