import { createSlice } from '@reduxjs/toolkit'
import map from 'lodash/map'
import forEach from 'lodash/forEach'
import keyBy from 'lodash/keyBy'
import { ServiceNameEnum } from 'services'
import { loadAll, load } from '../load'
import { VersionsState } from './model'

const initialState: VersionsState = {
  ids: [],
  byId: {},
}

const { reducer } = createSlice({
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
              avatar: {
                src: null,
              },
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
            avatar: {
              src: avatar,
            },
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
  reducers: {},
})

export default reducer
