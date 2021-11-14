import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { TechnologiesStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: TechnologiesStateT = {
  technologies: '',
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/technologies`,
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
