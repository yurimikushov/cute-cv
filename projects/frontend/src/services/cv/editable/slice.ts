import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { EditableState } from './model'

const initialState: EditableState = {
  editable: true,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/editable`,
  initialState,
  reducers: {
    toggle: (state) => {
      state.editable = !state.editable
    },
  },
})

export const { toggle } = actions
export default reducer
