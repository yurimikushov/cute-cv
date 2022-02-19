import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  UpdateExperiencePayload,
  UpdateEducationPayload,
  UpdateContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
} from './model'
import { selectCV, selectCurrentCvId } from './selectors'
import {
  updateFullName,
  updatePosition,
  updateAboutMe,
  updateAvatar,
  updateExperience,
  updateEduction,
  updateContact,
  updateTechnologies,
  updateLanguage,
} from './slice'

// eslint-disable-next-line max-statements
const useCV = () => {
  const id = useSelector(selectCurrentCvId)
  const cv = useSelector(selectCV)

  const dispatch = useDispatch()

  const changeFullName = (fullName: UpdateFullNamePayload['fullName']) => {
    dispatch(updateFullName({ id, fullName }))
  }

  const changePosition = (position: UpdatePositionPayload['position']) => {
    dispatch(updatePosition({ id, position }))
  }

  const changeAboutMe = (aboutMe: UpdateAboutMePayload['aboutMe']) => {
    dispatch(updateAboutMe({ id, aboutMe }))
  }

  const changeAvatar = (src: UpdateAvatarPayload['src']) => {
    dispatch(updateAvatar({ id, src }))
  }

  const changeExperience = (
    experienceId: UpdateExperiencePayload['experienceId'],
    position: UpdateExperiencePayload['position'],
    company: UpdateExperiencePayload['company'],
    duration: UpdateExperiencePayload['duration'],
    description: UpdateExperiencePayload['description']
    // eslint-disable-next-line max-params
  ) => {
    dispatch(
      updateExperience({
        id,
        experienceId,
        position,
        company,
        duration,
        description,
      })
    )
  }

  const changeEducation = (
    educationId: UpdateEducationPayload['educationId'],
    degree: UpdateEducationPayload['degree'],
    university: UpdateEducationPayload['university'],
    duration: UpdateEducationPayload['duration']
    // eslint-disable-next-line max-params
  ) => {
    dispatch(
      updateEduction({
        id,
        educationId,
        degree,
        university,
        duration,
      })
    )
  }

  const changeContact = (
    contactId: UpdateContactPayload['contactId'],
    text: UpdateContactPayload['text'],
    href: UpdateContactPayload['href']
  ) => {
    dispatch(
      updateContact({
        id,
        contactId,
        text,
        href,
      })
    )
  }

  const changeTechnologies = (
    technologies: UpdateTechnologiesPayload['technologies']
  ) => {
    dispatch(updateTechnologies({ id, technologies }))
  }

  const changeLanguage = (
    languageId: UpdateLanguagePayload['languageId'],
    language: UpdateLanguagePayload['language']
  ) => {
    dispatch(
      updateLanguage({
        id,
        languageId,
        language,
      })
    )
  }

  return {
    id,
    cv,
    changeFullName,
    changePosition,
    changeAboutMe,
    changeAvatar,
    changeExperience,
    changeEducation,
    changeContact,
    changeTechnologies,
    changeLanguage,
  }
}

export { useCV }
