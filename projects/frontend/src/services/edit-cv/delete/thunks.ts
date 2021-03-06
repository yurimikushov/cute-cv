import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'shared/api/cv'
import { ServiceNameEnum } from 'services'
import { DeletePayload } from './model'

const deleteCv = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/delete`,
  async ({ id }: DeletePayload) => {
    await cvApi.delete(id)

    return {
      id,
    }
  }
)

export { deleteCv }
