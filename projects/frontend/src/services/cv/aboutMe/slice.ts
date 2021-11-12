import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AboutMeStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: AboutMeStateT = {
  aboutMe: '',
}

const { actions, reducer } = createSlice({
  name: 'aboutMe',
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.aboutMe = payload.aboutMe
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.aboutMe = payload.aboutMe
    },
  },
})

export const { preset, update } = actions
export default reducer
