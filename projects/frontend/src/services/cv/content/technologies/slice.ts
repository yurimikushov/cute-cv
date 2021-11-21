import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SERVICE_NAME } from '../constants'
import { TechnologiesStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: TechnologiesStateT = {
  technologies: '',
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/technologies`,
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.technologies = payload.technologies
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.technologies = payload.technologies
    },
  },
})

export const { preset, update } = actions
export default reducer
