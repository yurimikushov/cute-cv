import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import {
  EducationsStateT,
  UpdateDegreePayloadT,
  UpdateUniversityPayloadT,
  UpdateDurationPayloadT,
  DeletePayloadT,
} from './model'

const initialState: EducationsStateT = {
  ids: [],
  educationsById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/educations`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      const { educations } = payload.content

      state.ids = map(educations, 'id')
      state.educationsById = keyBy(educations, 'id')
    })
  },
  reducers: {
    add: (state) => {
      const id = nanoid()

      state.ids.push(id)
      state.educationsById[id] = {
        id,
        degree: '',
        university: '',
        duration: '',
      }
    },
    updateDegree: (state, { payload }: PayloadAction<UpdateDegreePayloadT>) => {
      state.educationsById[payload.id].degree = payload.degree
    },
    updateUniversity: (
      state,
      { payload }: PayloadAction<UpdateUniversityPayloadT>
    ) => {
      state.educationsById[payload.id].university = payload.university
    },
    updateDuration: (
      state,
      { payload }: PayloadAction<UpdateDurationPayloadT>
    ) => {
      state.educationsById[payload.id].duration = payload.duration
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.educationsById = omit(state.educationsById, payload.id)
    },
  },
})

export const { add, updateDegree, updateUniversity, updateDuration, erase } =
  actions
export default reducer
