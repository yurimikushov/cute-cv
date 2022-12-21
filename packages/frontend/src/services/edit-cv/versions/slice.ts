/* eslint-disable max-lines */
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import sortBy from 'lodash/sortBy'
import first from 'shared/lib/first'
import keyBy from 'shared/lib/keyBy'
import without from 'shared/lib/without'
import omit from 'lodash/omit'
import cloneDeep from 'lodash/cloneDeep'
import swap from 'shared/lib/reorder'
import { ServiceNameEnum } from 'services'
import createCv from './utils/createCv'
import {
  VersionsState,
  InitAllCvPayload,
  UpdateCvPayload,
  UpdateCvMetadataPayload,
  MarkAsSavedPayload,
  MarkAsUnsavedPayload,
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  DeleteAvatarPayload,
  AddExperiencePayload,
  UpdateExperiencePayload,
  ReorderExperiencePayload,
  DeleteExperiencePayload,
  AddEducationPayload,
  UpdateEducationPayload,
  ReorderEducationPayload,
  DeleteEducationPayload,
  AddContactPayload,
  UpdateContactPayload,
  ReorderContactPayload,
  DeleteContactPayload,
  UpdateTechnologiesPayload,
  AddLanguagePayload,
  UpdateLanguagePayload,
  DeleteLanguagePayload,
  AddEmptyCvPayload,
  AddCvPayload,
  CopyCvPayload,
  DeleteCvPayload,
  SelectCvPayload,
} from './model'

const createInitialState = (): VersionsState => {
  const { metadata, content } = createCv()
  const { id } = metadata

  return {
    ids: [id],
    byId: {
      [id]: {
        metadata,
        content,
      },
    },
    currentId: id,
  }
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.EditCv}/versions`,
  initialState: createInitialState(),
  reducers: {
    initAllCv: (state, { payload: allCv }: PayloadAction<InitAllCvPayload>) => {
      state.ids = sortBy(allCv, 'number').map(({ id }) => id)
      state.byId = {}

      const { content } = createCv()

      allCv.forEach(({ publicId, id, name, number, allowShare }) => {
        state.byId[id] = {
          metadata: {
            publicId,
            id,
            name,
            number,
            isNew: false,
            isSaved: true,
            savedAt: null,
            allowShare,
          },
          content,
        }
      })

      state.currentId = first(state.ids) as string
    },

    updateCv: (state, { payload }: PayloadAction<UpdateCvPayload>) => {
      const { id, metadata, content } = payload
      const { isNew = false, savedAt } = metadata
      const { avatar, experiences, educations, contacts, languages } = content

      state.byId[id] = {
        metadata: {
          ...metadata,
          id,
          isNew,
          isSaved: Boolean(savedAt),
        },
        content: {
          ...content,
          avatar,
          experiences: {
            ids: experiences.map(({ id }) => id),
            byId: keyBy(experiences, 'id'),
          },
          educations: {
            ids: educations.map(({ id }) => id),
            byId: keyBy(educations, 'id'),
          },
          contacts: {
            ids: contacts.map(({ id }) => id),
            byId: keyBy(contacts, 'id'),
          },
          languages: {
            ids: languages.map(({ id }) => id),
            byId: keyBy(languages, 'id'),
          },
        },
      }
    },

    // eslint-disable-next-line max-statements
    updateCvMetadata: (
      state,
      { payload }: PayloadAction<UpdateCvMetadataPayload>
    ) => {
      const { publicId, id, name, isNew, isSaved, allowShare, savedAt } =
        payload
      const { metadata } = state.byId[id]

      if (publicId) {
        metadata.publicId = publicId
      }

      if (name) {
        metadata.name = name
      }

      if (isNew) {
        metadata.isNew = isNew
      }

      if (isSaved) {
        metadata.isSaved = isSaved
      }

      if (savedAt) {
        metadata.savedAt = savedAt
      }

      if (allowShare) {
        metadata.allowShare = allowShare
      }
    },

    markAsSaved: (state, { payload }: PayloadAction<MarkAsSavedPayload>) => {
      const { id, savedAt } = payload
      const { metadata } = state.byId[id]

      metadata.isSaved = true
      metadata.savedAt = savedAt
    },
    markAsUnsaved: (
      state,
      { payload }: PayloadAction<MarkAsUnsavedPayload>
    ) => {
      const { id } = payload
      const { metadata } = state.byId[id]

      metadata.isSaved = false
      metadata.savedAt = null
    },

    updateFullName: (
      state,
      { payload }: PayloadAction<UpdateFullNamePayload>
    ) => {
      const { id, fullName } = payload
      state.byId[id].content.fullName = fullName
    },
    updatePosition: (
      state,
      { payload }: PayloadAction<UpdatePositionPayload>
    ) => {
      const { id, position } = payload
      state.byId[id].content.position = position
    },
    updateAboutMe: (
      state,
      { payload }: PayloadAction<UpdateAboutMePayload>
    ) => {
      const { id, aboutMe } = payload
      state.byId[id].content.aboutMe = aboutMe
    },
    updateAvatar: (state, { payload }: PayloadAction<UpdateAvatarPayload>) => {
      const { id, src } = payload
      state.byId[id].content.avatar = src
    },
    deleteAvatar: (state, { payload }: PayloadAction<DeleteAvatarPayload>) => {
      const { id } = payload
      state.byId[id].content.avatar = null
    },

    addExperience: (
      state,
      { payload }: PayloadAction<AddExperiencePayload>
    ) => {
      const { id } = payload
      const experienceId = nanoid()
      const { experiences } = state.byId[id].content

      experiences.ids.push(experienceId)
      experiences.byId[experienceId] = {
        id: experienceId,
        position: '',
        company: '',
        duration: '',
        description: '',
      }
    },
    updateExperience: (
      state,
      { payload }: PayloadAction<UpdateExperiencePayload>
    ) => {
      const { id, experienceId, position, company, duration, description } =
        payload
      const { experiences } = state.byId[id].content

      experiences.byId[experienceId] = {
        id: experienceId,
        position,
        company,
        duration,
        description,
      }
    },
    reorderExperience: (
      state,
      { payload }: PayloadAction<ReorderExperiencePayload>
    ) => {
      const { id, startIndex, endIndex } = payload
      const { experiences } = state.byId[id].content

      experiences.ids = swap(experiences.ids, startIndex, endIndex)
    },
    deleteExperience: (
      state,
      { payload }: PayloadAction<DeleteExperiencePayload>
    ) => {
      const { id, experienceId } = payload
      const { experiences } = state.byId[id].content

      experiences.ids = without(experiences.ids, experienceId)
      experiences.byId = omit(experiences.byId, experienceId)
    },

    addEduction: (state, { payload }: PayloadAction<AddEducationPayload>) => {
      const { id } = payload
      const educationId = nanoid()
      const { educations } = state.byId[id].content

      educations.ids.push(educationId)
      educations.byId[educationId] = {
        id: educationId,
        degree: '',
        university: '',
        duration: '',
      }
    },
    updateEduction: (
      state,
      { payload }: PayloadAction<UpdateEducationPayload>
    ) => {
      const { id, educationId, degree, university, duration } = payload

      state.byId[id].content.educations.byId[educationId] = {
        id: educationId,
        degree,
        university,
        duration,
      }
    },
    reorderEducation: (
      state,
      { payload }: PayloadAction<ReorderEducationPayload>
    ) => {
      const { id, startIndex, endIndex } = payload
      const { educations } = state.byId[id].content

      educations.ids = swap(educations.ids, startIndex, endIndex)
    },
    deleteEducation: (
      state,
      { payload }: PayloadAction<DeleteEducationPayload>
    ) => {
      const { id, educationId } = payload
      const { educations } = state.byId[id].content

      educations.ids = without(educations.ids, educationId)
      educations.byId = omit(educations.byId, educationId)
    },

    addContact: (state, { payload }: PayloadAction<AddContactPayload>) => {
      const { id } = payload
      const contactId = nanoid()
      const { contacts } = state.byId[id].content

      contacts.ids.push(contactId)
      contacts.byId[contactId] = {
        id: contactId,
        text: '',
        href: '',
      }
    },
    updateContact: (
      state,
      { payload }: PayloadAction<UpdateContactPayload>
    ) => {
      const { id, contactId, text, href } = payload

      state.byId[id].content.contacts.byId[contactId] = {
        id: contactId,
        text,
        href,
      }
    },
    reorderContact: (
      state,
      { payload }: PayloadAction<ReorderContactPayload>
    ) => {
      const { id, startIndex, endIndex } = payload
      const { contacts } = state.byId[id].content

      contacts.ids = swap(contacts.ids, startIndex, endIndex)
    },
    deleteContact: (
      state,
      { payload }: PayloadAction<DeleteContactPayload>
    ) => {
      const { id, contactId } = payload
      const { contacts } = state.byId[id].content

      contacts.ids = without(contacts.ids, contactId)
      contacts.byId = omit(contacts.byId, contactId)
    },

    updateTechnologies: (
      state,
      { payload }: PayloadAction<UpdateTechnologiesPayload>
    ) => {
      const { id, technologies } = payload

      state.byId[id].content.technologies = technologies
    },

    addLanguage: (state, { payload }: PayloadAction<AddLanguagePayload>) => {
      const { id } = payload
      const languageId = nanoid()
      const { languages } = state.byId[id].content

      languages.ids.push(languageId)
      languages.byId[languageId] = {
        id: languageId,
        language: '',
      }
    },
    updateLanguage: (
      state,
      { payload }: PayloadAction<UpdateLanguagePayload>
    ) => {
      const { id, languageId, language } = payload

      state.byId[id].content.languages.byId[languageId] = {
        id: languageId,
        language,
      }
    },
    deleteLanguage: (
      state,
      { payload }: PayloadAction<DeleteLanguagePayload>
    ) => {
      const { id, languageId } = payload
      const { languages } = state.byId[id].content

      languages.ids = without(languages.ids, languageId)
      languages.byId = omit(languages.byId, languageId)
    },

    selectCv: (state, { payload }: PayloadAction<SelectCvPayload>) => {
      state.currentId = payload.id
    },

    addEmptyCv: (state, { payload }: PayloadAction<AddEmptyCvPayload>) => {
      const { id, name, number, allowShare } = payload
      const { metadata, content } = createCv({ id, name, number, allowShare })

      state.ids.push(id)
      state.byId[id] = {
        metadata,
        content,
      }
    },

    addCv: (state, { payload }: PayloadAction<AddCvPayload>) => {
      const { metadata, content } = payload
      const { id } = metadata
      const { avatar, experiences, educations, contacts, languages } = content

      state.ids.push(id)

      state.byId[id] = {
        metadata: {
          ...metadata,
          id,
          isNew: true,
          isSaved: false,
          savedAt: null,
          allowShare: false,
        },
        content: {
          ...content,
          avatar,
          experiences: {
            ids: experiences.map(({ id }) => id),
            byId: keyBy(experiences, 'id'),
          },
          educations: {
            ids: educations.map(({ id }) => id),
            byId: keyBy(educations, 'id'),
          },
          contacts: {
            ids: contacts.map(({ id }) => id),
            byId: keyBy(contacts, 'id'),
          },
          languages: {
            ids: languages.map(({ id }) => id),
            byId: keyBy(languages, 'id'),
          },
        },
      }
    },

    makeCvCopy: (state, { payload }: PayloadAction<CopyCvPayload>) => {
      const { baseCvId, copyCvId, copyCvNumber, copyCvName } = payload
      const { metadata: baseCvMetadata, content: baseCvContent } =
        state.byId[baseCvId]

      const { allowShare } = baseCvMetadata
      const copyCvContent = cloneDeep(baseCvContent)

      state.ids.push(copyCvId)
      state.byId[copyCvId] = {
        metadata: {
          id: copyCvId,
          number: copyCvNumber,
          name: copyCvName,
          isNew: true,
          isSaved: false,
          savedAt: null,
          allowShare,
        },
        content: copyCvContent,
      }
    },

    deleteCv: (state, { payload }: PayloadAction<DeleteCvPayload>) => {
      const { id } = payload

      state.ids = without(state.ids, id)
      state.byId = omit(state.byId, id)
    },
  },
})

export const {
  initAllCv,
  updateCv,
  updateCvMetadata,
  markAsSaved,
  markAsUnsaved,
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
  addEmptyCv,
  addCv,
  makeCvCopy,
  deleteCv,
} = actions
export default reducer
