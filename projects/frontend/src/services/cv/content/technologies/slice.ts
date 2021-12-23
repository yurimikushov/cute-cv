import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { TechnologiesStateT, UpdatePayloadT } from './model'

const initialState: TechnologiesStateT = {
  technologies: '',
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/technologies`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      state.technologies = payload.content.technologies
    })
  },
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.technologies = payload.technologies
    },
  },
})

export const { update } = actions
export default reducer
