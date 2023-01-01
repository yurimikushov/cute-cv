import { FC } from 'react'
import { CV_CONTAINER_ID } from 'services/download-cv'
import { useSharableCv } from 'services/share-cv'
import CvLayout from 'shared/ui/layouts/CvLayout'
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

  if (!cv) {
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
          <Experiences>
            {experiences.map(
              ({ id, position, company, duration, description }) => (
                <Experiences.Experience
                  key={id}
                  position={position}
                  company={company}
                  duration={duration}
                  description={description}
                />
              )
            )}
          </Experiences>
          <Educations>
            {educations.map(
              ({ id, degree, university, duration }) => (
                <Educations.Education
                  key={id}
                  degree={degree}
                  university={university}
                  duration={duration}
                />
              )
            )}
          </Educations>
        </>
      }
      aside={
        <>
          <Contacts editable={false} contacts={contacts} />
          <Technologies editable={false} technologies={technologies} />
          <Languages>
            {languages.map(({ id, language }) => (
              <Languages.Language key={id} language={language} />
            ))}
          </Languages>
        </>
      }
    />
  )
}

export default CvContainer
