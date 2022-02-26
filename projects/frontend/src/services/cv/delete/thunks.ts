import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { DeletePayload } from './model'

const deleteCv = createAsyncThunk(
  `${ServiceNameEnum.cv}/delete`,
  async ({ id }: DeletePayload) => {
    await cvApi.delete(id)

    return {
      id,
    }
  }
)

export { deleteCv }
