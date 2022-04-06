import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { PatchPayload } from './model'

const patch = createAsyncThunk(
  `${ServiceNameEnum.EditCv}/patch`,
  async (payload: PatchPayload) => {
    const metadata = await cvApi.patch(payload)
    return metadata
  }
)

export { patch }
