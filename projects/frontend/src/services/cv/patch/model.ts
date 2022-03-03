import { SerializedError } from '@reduxjs/toolkit'
import { CV } from 'services/cv'

type PatchState = {
  isPatching: boolean
  error: SerializedError | null
}

type PatchPayload = {
  id: string
  name?: string
  number?: number
  cv?: Partial<CV>
}

export type { PatchState, PatchPayload }
