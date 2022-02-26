import { useEffect } from 'react'
import map from 'lodash/map'
import without from 'lodash/without'
import isEmpty from 'lodash/isEmpty'
import useEffectWhen from 'hooks/useEffectWhen'
import { useIsSignedIn } from 'services/auth'
import getNextCurrentId from './utils/getNextCurrentId'
import { useLoadAllCV, useLoadCV } from './load'
import { useDeleteCv as useDeleteCvFromBackend } from './delete'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useSelectCv,
  useAddCv,
  useDeleteCv as useDeleteCvFromStore,
} from './versions'

const useAutoLoadAllCv = () => {
  const { isSignedIn } = useIsSignedIn()

  const loadAllCv = useLoadAllCV()

  useEffectWhen(loadAllCv, isSignedIn)
}

const useAutoLoadCurrentCv = () => {
  const { isSignedIn } = useIsSignedIn()
  const { id, isNew } = useCurrentCvMetadata()
  const loadCv = useLoadCV()

  useEffect(() => {
    if (!isSignedIn || isNew) {
      return
    }

    loadCv(id)
  }, [isSignedIn, id, isNew])
}

const useDeleteCv = () => {
  const allCv = useAllCvMetadata()
  const { id: currentId } = useCurrentCvMetadata()
  const selectCv = useSelectCv()
  const addCv = useAddCv()
  const deleteCvFromBackend = useDeleteCvFromBackend()
  const deleteCvFromStore = useDeleteCvFromStore()

  const selectNextCv = (id: string) => {
    const cvIds = map(allCv, 'id')

    if (isEmpty(without(cvIds, id))) {
      const FIRST_CV_VERSION_NUMBER = 1
      const newCvId = addCv(FIRST_CV_VERSION_NUMBER)
      cvIds.push(newCvId)
    }

    if (currentId === id) {
      selectCv(getNextCurrentId(cvIds, id))
    }
  }

  const handleDeleteCv = (id: string, isNew: boolean) => {
    if (isNew) {
      selectNextCv(id)
      deleteCvFromStore(id)
      return
    }

    deleteCvFromBackend(id).then(() => {
      selectNextCv(id)
      deleteCvFromStore(id)
    })
  }

  return handleDeleteCv
}

export { useAutoLoadAllCv, useAutoLoadCurrentCv, useDeleteCv }
