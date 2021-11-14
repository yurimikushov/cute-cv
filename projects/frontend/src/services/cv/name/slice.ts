import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { NameStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: NameStateT = {
  fullName: '',
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/name`,
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.fullName = payload.fullName
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.fullName = payload.fullName
    },
  },
})

export const { preset, update } = actions
export default reducer
