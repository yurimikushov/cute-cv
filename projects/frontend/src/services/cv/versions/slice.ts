/* eslint-disable max-lines */
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import head from 'lodash/head'
import forEach from 'lodash/forEach'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import swap from 'lib/reorder'
import { ServiceNameEnum } from 'services'
import { loadAll, load } from '../load'
import { save } from '../save'
import createCv from './utils/createCv'
import {
  VersionsState,
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
  name: `${ServiceNameEnum.cv}/versions`,
  initialState: createInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(loadAll.fulfilled, (state, { payload: allCv }) => {
        if (isEmpty(allCv)) {
          state = createInitialState()
          return
        }

        state.ids = map(allCv, 'id')
        state.byId = {}

        const { content } = createCv()

        forEach(allCv, ({ id, name }) => {
          state.byId[id] = {
            metadata: {
              id,
              name,
              isSaved: true,
              savedAt: null,
            },
            content,
          }
        })

        state.currentId = head(state.ids) as string
      })
      .addCase(load.fulfilled, (state, { payload }) => {
        const { metadata, content } = payload
        const { id, savedAt } = metadata
        const { avatar, experiences, educations, contacts, languages } = content

        state.byId[id] = {
          metadata: {
            ...metadata,
            isSaved: Boolean(savedAt),
            savedAt: new Date(savedAt),
          },
          content: {
            ...content,
            avatar,
            experiences: {
              ids: map(experiences, 'id'),
              byId: keyBy(experiences, 'id'),
            },
            educations: {
              ids: map(educations, 'id'),
              byId: keyBy(educations, 'id'),
            },
            contacts: {
              ids: map(contacts, 'id'),
              byId: keyBy(contacts, 'id'),
            },
            languages: {
              ids: map(languages, 'id'),
              byId: keyBy(languages, 'id'),
            },
          },
        }
      })
      .addCase(save.fulfilled, (state, { payload }) => {
        const { id, savedAt } = payload
        const { metadata } = state.byId[id]

        metadata.isSaved = true
        metadata.savedAt = new Date(savedAt)
      })
  },
  reducers: {
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

      experiences.ids = filter(experiences.ids, (id) => id !== experienceId)
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

      educations.ids = filter(educations.ids, (id) => id !== educationId)
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

      contacts.ids = filter(contacts.ids, (id) => id !== contactId)
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

      languages.ids = filter(languages.ids, (id) => id !== languageId)
      languages.byId = omit(languages.byId, languageId)
    },

    selectCv: (state, { payload }: PayloadAction<SelectCvPayload>) => {
      state.currentId = payload.id
    },
  },
})

export const {
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
} = actions
export default reducer
