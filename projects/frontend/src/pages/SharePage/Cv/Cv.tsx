import { FC } from 'react'
import { CV_CONTAINER_ID } from 'services/share-cv'
import CvLayout from 'layouts/CvLayout'
import Header from 'components/cv/page/Header'
import Avatar from 'components/cv/page/Avatar'
import AboutMe from 'components/cv/page/AboutMe'
import Experiences from 'components/cv/page/Experiences'
import Educations from 'components/cv/page/Educations'
import Contacts from 'components/cv/page/Contacts'
import Technologies from 'components/cv/page/Technologies'
import Languages from 'components/cv/page/Languages'
import CvProps from './Cv.props'

const Cv: FC<CvProps> = ({ cv, ...props }) => {
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

export default Cv
