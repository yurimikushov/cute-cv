import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit'
import filter from 'lodash/filter'
import omit from 'lodash/omit'
import { EducationsStateT, UpdatePayloadT, DeletePayloadT } from './model'

const initialState: EducationsStateT = {
  ids: [],
  educationsById: {},
}

const { actions, reducer } = createSlice({
  name: 'educations',
  initialState,
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
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.educationsById[payload.id].degree = payload.degree
      state.educationsById[payload.id].university = payload.university
      state.educationsById[payload.id].duration = payload.duration
    },
    erase: (state, { payload }: PayloadAction<DeletePayloadT>) => {
      state.ids = filter(state.ids, (id) => payload.id !== id)
      state.educationsById = omit(state.educationsById, payload.id)
    },
  },
})

export const { add, update, erase } = actions
export default reducer
