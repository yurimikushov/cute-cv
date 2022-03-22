import { FC } from 'react'
import isEmpty from 'lodash/isEmpty'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import {
  useEditable,
  useCurrentCvContent,
  CV_CONTAINER_ID,
  FULL_NAME_MAX_LENGTH,
  POSITION_MAX_LENGTH,
  ABOUT_ME_MAX_LENGTH,
  EXPERIENCES_MAX_COUNT,
  EXPERIENCE_POSITION_MAX_LENGTH,
  EXPERIENCE_COMPANY_MAX_LENGTH,
  EXPERIENCE_DURATION_MAX_LENGTH,
  EXPERIENCE_DESCRIPTION_MAX_LENGTH,
  EDUCATIONS_MAX_COUNT,
  EDUCATION_DEGREE_MAX_LENGTH,
  EDUCATION_UNIVERSITY_MAX_LENGTH,
  EDUCATION_DURATION_MAX_LENGTH,
  CONTACTS_MAX_COUNT,
  CONTACT_TEXT_MAX_LENGTH,
  CONTACT_HREF_MAX_LENGTH,
  TECHNOLOGIES_MAX_LENGTH,
  LANGUAGES_MAX_COUNT,
  LANGUAGE_MAX_LENGTH,
} from 'services/edit-cv'
import CvLayout from 'layouts/CvLayout'
import Header from 'components/cv/Header'
import Avatar from 'components/cv/Avatar'
import AboutMe from 'components/cv/AboutMe'
import Experiences from 'components/cv/Experiences'
import Educations from 'components/cv/Educations'
import Contacts from 'components/cv/Contacts'
import Technologies from 'components/cv/Technologies'
import Languages from 'components/cv/Languages'
import CurrentCvProps from './CurrentCv.props'

// eslint-disable-next-line max-statements
const CurrentCv: FC<CurrentCvProps> = () => {
  const { editable } = useEditable()
  const {
    cv,
    changeFullName,
    changePosition,
    changeAvatar,
    deleteAvatar,
    changeAboutMe,
    changeExperience,
    reorderExperience,
    deleteExperience,
    addExperience,
    changeEducation,
    reorderEducation,
    deleteEducation,
    addEduction,
    changeContact,
    reorderContact,
    deleteContact,
    addContact,
    changeTechnologies,
    changeLanguage,
    deleteLanguage,
    addLanguage,
  } = useCurrentCvContent()

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
  } = cv

  useLayoutEffectWhen(addExperience, isEmpty(experiences))
  useLayoutEffectWhen(addEduction, isEmpty(educations))
  useLayoutEffectWhen(addContact, isEmpty(contacts))
  useLayoutEffectWhen(addLanguage, isEmpty(languages))

  return (
    <CvLayout
      id={CV_CONTAINER_ID}
      header={
        <Header
          editable={editable}
          fullName={fullName}
          position={position}
          fullNameMaxLength={FULL_NAME_MAX_LENGTH}
          positionMaxLength={POSITION_MAX_LENGTH}
          onChangeFullName={changeFullName}
          onChangePosition={changePosition}
        />
      }
      avatar={
        <Avatar
          editable={editable}
          src={avatar}
          onPick={changeAvatar}
          onClear={deleteAvatar}
        />
      }
      main={
        <>
          <AboutMe
            editable={editable}
            value={aboutMe}
            maxLength={ABOUT_ME_MAX_LENGTH}
            onChange={changeAboutMe}
          />
          <Experiences
            editable={editable}
            experiences={experiences}
            maxCount={EXPERIENCES_MAX_COUNT}
            positionMaxLength={EXPERIENCE_POSITION_MAX_LENGTH}
            companyMaxLength={EXPERIENCE_COMPANY_MAX_LENGTH}
            durationMaxLength={EXPERIENCE_DURATION_MAX_LENGTH}
            descriptionMaxLength={EXPERIENCE_DESCRIPTION_MAX_LENGTH}
            onChange={changeExperience}
            onReorder={reorderExperience}
            onDelete={deleteExperience}
            onAdd={addExperience}
          />
          <Educations
            editable={editable}
            educations={educations}
            maxCount={EDUCATIONS_MAX_COUNT}
            degreeMaxLength={EDUCATION_DEGREE_MAX_LENGTH}
            universityMaxLength={EDUCATION_UNIVERSITY_MAX_LENGTH}
            durationMaxLength={EDUCATION_DURATION_MAX_LENGTH}
            onChange={changeEducation}
            onReorder={reorderEducation}
            onDelete={deleteEducation}
            onAdd={addEduction}
          />
        </>
      }
      aside={
        <>
          <Contacts
            editable={editable}
            contacts={contacts}
            maxCount={CONTACTS_MAX_COUNT}
            textMaxLength={CONTACT_TEXT_MAX_LENGTH}
            hrefMaxLength={CONTACT_HREF_MAX_LENGTH}
            onChange={changeContact}
            onReorder={reorderContact}
            onDelete={deleteContact}
            onAdd={addContact}
          />
          <Technologies
            editable={editable}
            technologies={technologies}
            maxLength={TECHNOLOGIES_MAX_LENGTH}
            onChange={changeTechnologies}
          />
          <Languages
            editable={editable}
            languages={languages}
            maxCount={LANGUAGES_MAX_COUNT}
            maxLength={LANGUAGE_MAX_LENGTH}
            onChange={changeLanguage}
            onDelete={deleteLanguage}
            onAdd={addLanguage}
          />
        </>
      }
    />
  )
}

export default CurrentCv
