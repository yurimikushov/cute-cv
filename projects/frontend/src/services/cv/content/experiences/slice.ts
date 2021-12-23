import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import map from 'lodash/map'
import keyBy from 'lodash/keyBy'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import {
  ExperiencesStateT,
  UpdatePositionPayloadT,
  UpdateCompanyPayloadT,
  UpdateDurationPayloadT,
  UpdateDescriptionPayloadT,
  DeletePayloadT,
} from './model'

const initialState: ExperiencesStateT = {
  ids: [],
  experiencesById: {},
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/experiences`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      const { experiences } = payload.content

      state.ids = map(experiences, 'id')
      state.experiencesById = keyBy(experiences, 'id')
    })
  },
  reducers: {
    add: (state) => {
      const id = nanoid()

      state.ids.push(id)
      state.experiencesById[id] = {
        id,
        position: '',
        company: '',
        duration: '',
        description: '',
      }
    },
    updatePosition: (
      state,
      { payload }: PayloadAction<UpdatePositionPayloadT>
    ) => {
      state.experiencesById[payload.id].position = payload.position
    },
    updateCompany: (
      state,
      { payload }: PayloadAction<UpdateCompanyPayloadT>
    ) => {
      state.experiencesById[payload.id].company = payload.company
    },
    updateDuration: (
      state,
      { payload }: PayloadAction<UpdateDurationPayloadT>
    ) => {
      state.experiencesById[payload.id].duration = payload.duration
    },
    updateDescription: (
      state,
      { payload }: PayloadAction<UpdateDescriptionPayloadT>
    ) => {
      state.experiencesById[payload.id].description = payload.description
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.experiencesById = omit(state.experiencesById, payload.id)
    },
  },
})

export const {
  add,
  updatePosition,
  updateCompany,
  updateDuration,
  updateDescription,
  erase,
} = actions
export default reducer
