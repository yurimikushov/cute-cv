import { useDispatch, useSelector } from 'react-redux'
import {
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  UpdateExperiencePayload,
  ReorderExperiencePayload,
  DeleteExperiencePayload,
  UpdateEducationPayload,
  UpdateContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
  SelectCvPayload,
} from './model'
import { selectCV, selectCurrentCvId } from './selectors'
import {
  updateFullName,
  updatePosition,
  updateAboutMe,
  updateAvatar,
  deleteAvatar,
  addExperience,
  updateExperience,
  reorderExperience,
  deleteExperience,
  updateEduction,
  updateContact,
  updateTechnologies,
  updateLanguage,
  selectCv,
} from './slice'

// eslint-disable-next-line max-statements
const useCV = () => {
  const id = useSelector(selectCurrentCvId)
  const cv = useSelector(selectCV)

  const dispatch = useDispatch()

  const handleChangeFullName = (
    fullName: UpdateFullNamePayload['fullName']
  ) => {
    dispatch(updateFullName({ id, fullName }))
  }

  const handleChangePosition = (
    position: UpdatePositionPayload['position']
  ) => {
    dispatch(updatePosition({ id, position }))
  }

  const handleChangeAboutMe = (aboutMe: UpdateAboutMePayload['aboutMe']) => {
    dispatch(updateAboutMe({ id, aboutMe }))
  }

  const handleChangeAvatar = (src: UpdateAvatarPayload['src']) => {
    dispatch(updateAvatar({ id, src }))
  }

  const handleDeleteAvatar = () => {
    dispatch(deleteAvatar({ id }))
  }

  const handleAddExperience = () => {
    dispatch(addExperience({ id }))
  }

  const handleChangeExperience = (
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

  const handleReorderExperience = (
    startIndex: ReorderExperiencePayload['startIndex'],
    endIndex: ReorderExperiencePayload['endIndex']
  ) => {
    dispatch(reorderExperience({ id, startIndex, endIndex }))
  }

  const handleDeleteExperience = (
    experienceId: DeleteExperiencePayload['experienceId']
  ) => {
    dispatch(deleteExperience({ id, experienceId }))
  }

  const handleChangeEducation = (
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

  const handleChangeContact = (
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

  const handleChangeTechnologies = (
    technologies: UpdateTechnologiesPayload['technologies']
  ) => {
    dispatch(updateTechnologies({ id, technologies }))
  }

  const handleChangeLanguage = (
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

  const handleSelectCv = (id: SelectCvPayload['id']) => {
    dispatch(selectCv({ id }))
  }

  return {
    id,
    cv,
    changeFullName: handleChangeFullName,
    changePosition: handleChangePosition,
    changeAboutMe: handleChangeAboutMe,
    changeAvatar: handleChangeAvatar,
    deleteAvatar: handleDeleteAvatar,
    addExperience: handleAddExperience,
    changeExperience: handleChangeExperience,
    reorderExperience: handleReorderExperience,
    deleteExperience: handleDeleteExperience,
    changeEducation: handleChangeEducation,
    changeContact: handleChangeContact,
    changeTechnologies: handleChangeTechnologies,
    changeLanguage: handleChangeLanguage,
    selectCv: handleSelectCv,
  }
}

export { useCV }
