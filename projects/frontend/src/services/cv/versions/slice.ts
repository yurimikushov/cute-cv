import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import map from 'lodash/map'
import forEach from 'lodash/forEach'
import keyBy from 'lodash/keyBy'
import { ServiceNameEnum } from 'services'
import { loadAll, load } from '../load'
import {
  VersionsState,
  UpdateFullNamePayload,
  UpdatePositionPayload,
  UpdateAboutMePayload,
  UpdateAvatarPayload,
  UpdateExperiencePayload,
  UpdateEducationPayload,
  UpdateContactPayload,
  UpdateTechnologiesPayload,
  UpdateLanguagePayload,
  SelectCvPayload,
} from './model'

const initialState: VersionsState = {
  ids: [],
  byId: {},
  currentId: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/versions`,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadAll.fulfilled, (state, { payload: allCv }) => {
        state.ids = map(allCv, 'id')

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
    updateExperience: (
      state,
      { payload }: PayloadAction<UpdateExperiencePayload>
    ) => {
      const { id, experienceId, position, company, duration, description } =
        payload

      state.byId[id].content.experiences.byId[experienceId] = {
        id: experienceId,
        position,
        company,
        duration,
        description,
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
  updateExperience,
  updateEduction,
  updateContact,
  updateTechnologies,
  updateLanguage,
  selectCv,
} = actions
export default reducer
