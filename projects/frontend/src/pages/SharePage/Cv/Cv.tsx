import { FC } from 'react'
import noop from 'lodash/noop'
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

const STUB_NUMBER = Infinity

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
        <Header
          editable={false}
          fullName={fullName}
          position={position}
          fullNameMaxLength={STUB_NUMBER}
          positionMaxLength={STUB_NUMBER}
          onChangeFullName={noop}
          onChangePosition={noop}
        />
      }
      avatar={
        <Avatar editable={false} src={avatar} onPick={noop} onClear={noop} />
      }
      main={
        <>
          <AboutMe
            editable={false}
            value={aboutMe}
            maxLength={STUB_NUMBER}
            onChange={noop}
          />
          <Experiences
            editable={false}
            experiences={experiences}
            maxCount={STUB_NUMBER}
            positionMaxLength={STUB_NUMBER}
            companyMaxLength={STUB_NUMBER}
            durationMaxLength={STUB_NUMBER}
            descriptionMaxLength={STUB_NUMBER}
            onChange={noop}
            onReorder={noop}
            onDelete={noop}
            onAdd={noop}
          />
          <Educations
            editable={false}
            educations={educations}
            maxCount={STUB_NUMBER}
            degreeMaxLength={STUB_NUMBER}
            universityMaxLength={STUB_NUMBER}
            durationMaxLength={STUB_NUMBER}
            onChange={noop}
            onReorder={noop}
            onDelete={noop}
            onAdd={noop}
          />
        </>
      }
      aside={
        <>
          <Contacts
            editable={false}
            contacts={contacts}
            maxCount={STUB_NUMBER}
            textMaxLength={STUB_NUMBER}
            hrefMaxLength={STUB_NUMBER}
            onChange={noop}
            onReorder={noop}
            onDelete={noop}
            onAdd={noop}
          />
          <Technologies
            editable={false}
            technologies={technologies}
            maxLength={STUB_NUMBER}
            onChange={noop}
          />
          <Languages
            editable={false}
            languages={languages}
            maxCount={STUB_NUMBER}
            maxLength={STUB_NUMBER}
            onChange={noop}
            onDelete={noop}
            onAdd={noop}
          />
        </>
      }
    />
  )
}

export default Cv
