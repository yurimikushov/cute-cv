import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { SavePayload } from './model'

const save = createAsyncThunk(
  `${ServiceNameEnum.cv}/save`,
  async ({ id, name, cv }: SavePayload) => {
    const metadata = await cvApi.save(id, name, cv)
    return metadata
  }
)

export { save }
