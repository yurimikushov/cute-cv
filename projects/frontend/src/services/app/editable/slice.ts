import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EditableStateT, SetPayloadT } from './model'

const initialState: EditableStateT = {
  editable: true,
}

const { actions, reducer } = createSlice({
  name: 'editable',
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<SetPayloadT>) => {
      state.editable = payload.editable
    },
  },
})

export const { set } = actions
export default reducer
