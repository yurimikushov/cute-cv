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
  ReorderEducationPayload,
  DeleteEducationPayload,
  UpdateContactPayload,
  ReorderContactPayload,
  DeleteContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
  DeleteLanguagePayload,
  SelectCvPayload,
} from '../model'
import { selectCvContent, selectCurrentCvId } from '../selectors'
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
  addEduction,
  updateEduction,
  reorderEducation,
  deleteEducation,
  addContact,
  updateContact,
  reorderContact,
  deleteContact,
  updateTechnologies,
  addLanguage,
  updateLanguage,
  deleteLanguage,
  selectCv,
} from '../slice'

// eslint-disable-next-line max-statements
const useCvContent = () => {
  const id = useSelector(selectCurrentCvId)
  const cv = useSelector(selectCvContent)

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

  const handleAddEducation = () => {
    dispatch(addEduction({ id }))
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

  const handleReorderEducation = (
    startIndex: ReorderEducationPayload['startIndex'],
    endIndex: ReorderEducationPayload['endIndex']
  ) => {
    dispatch(reorderEducation({ id, startIndex, endIndex }))
  }

  const handleDeleteEducation = (
    educationId: DeleteEducationPayload['educationId']
  ) => {
    dispatch(deleteEducation({ id, educationId }))
  }

  const handleAddContact = () => {
    dispatch(addContact({ id }))
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

  const handleReorderContact = (
    startIndex: ReorderContactPayload['startIndex'],
    endIndex: ReorderContactPayload['endIndex']
  ) => {
    dispatch(reorderContact({ id, startIndex, endIndex }))
  }

  const handleDeleteContact = (
    contactId: DeleteContactPayload['contactId']
  ) => {
    dispatch(deleteContact({ id, contactId }))
  }

  const handleChangeTechnologies = (
    technologies: UpdateTechnologiesPayload['technologies']
  ) => {
    dispatch(updateTechnologies({ id, technologies }))
  }

  const handleAddLanguage = () => {
    dispatch(addLanguage({ id }))
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

  const handleDeleteLanguage = (
    languageId: DeleteLanguagePayload['languageId']
  ) => {
    dispatch(deleteLanguage({ id, languageId }))
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
    addEduction: handleAddEducation,
    changeEducation: handleChangeEducation,
    reorderEducation: handleReorderEducation,
    deleteEducation: handleDeleteEducation,
    addContact: handleAddContact,
    reorderContact: handleReorderContact,
    deleteContact: handleDeleteContact,
    changeContact: handleChangeContact,
    changeTechnologies: handleChangeTechnologies,
    addLanguage: handleAddLanguage,
    changeLanguage: handleChangeLanguage,
    deleteLanguage: handleDeleteLanguage,
    selectCv: handleSelectCv,
  }
}

export default useCvContent
