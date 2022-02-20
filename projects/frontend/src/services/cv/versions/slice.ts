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
import createDummyCv from './utils/createDummyCv'
import {
  VersionsState,
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  DeleteAvatarPayload,
  AddExperiencePayload,
  UpdateExperiencePayload,
  ReorderExperiencePayload,
  DeleteExperiencePayload,
  UpdateEducationPayload,
  UpdateContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
  SelectCvPayload,
} from './model'

const createInitialState = (): VersionsState => {
  const { metadata, content } = createDummyCv()
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

        forEach(allCv, ({ id, name }) => {
          state.byId[id] = {
            metadata: {
              id,
              name,
              isSaved: true,
              savedAt: null,
            },
            content: {
              fullName: '',
              position: '',
              aboutMe: '',
              avatar: null,
              experiences: { ids: [], byId: {} },
              educations: { ids: [], byId: {} },
              contacts: { ids: [], byId: {} },
              technologies: '',
              languages: { ids: [], byId: {} },
            },
          }
        })

        state.currentId = head(state.ids) as string
      })
      .addCase(load.fulfilled, (state, { payload: { metadata, content } }) => {
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
  },
  reducers: {
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
    updateTechnologies: (
      state,
      { payload }: PayloadAction<UpdateTechnologiesPayload>
    ) => {
      const { id, technologies } = payload

      state.byId[id].content.technologies = technologies
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
    selectCv: (state, { payload }: PayloadAction<SelectCvPayload>) => {
      state.currentId = payload.id
    },
  },
})

export const {
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
} = actions
export default reducer
