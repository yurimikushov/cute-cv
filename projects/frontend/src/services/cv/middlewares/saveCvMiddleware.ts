import { AnyAction } from '@reduxjs/toolkit'
import debounce from 'lodash/debounce'
import isNil from 'lodash/isNil'
import defer from 'lodash/defer'
import cvApi from 'api/cv'
import { Middleware, Store } from 'services/store'
import { selectIsSignedIn } from 'services/auth'
import {
  selectCurrentCv,
  isCvContentChanged,
  updateCvMetadata,
} from '../versions'
import { add, AddResult } from '../add'
import { save, SaveResult } from '../save'

const AUTO_SAVE_TIMING = 1_000

const saveCvOfSignedInUser = debounce((store: Store) => {
  const { metadata, content } = selectCurrentCv(store.getState())
  const { publicId, id, name, number } = metadata

  if (isNil(publicId)) {
    store
      .dispatch(add({ name, number, cv: content }) as unknown as AnyAction)
      .unwrap()
      .then(({ publicId, savedAt }: AddResult) => {
        store.dispatch(
          updateCvMetadata({
            publicId,
            id,
            isNew: false,
            isSaved: Boolean(savedAt),
            savedAt,
          })
        )
      })
  } else {
    store
      .dispatch(
        save({ publicId, name, number, cv: content }) as unknown as AnyAction
      )
      .unwrap()
      .then(({ publicId, savedAt }: SaveResult) => {
        store.dispatch(
          updateCvMetadata({
            publicId,
            id,
            isNew: false,
            isSaved: Boolean(savedAt),
            savedAt,
          })
        )
      })
  }
}, AUTO_SAVE_TIMING)

const saveCvOfUnsignedInUser = (store: Store) => {
  cvApi.saveCvOfUnsignedInUser(selectCurrentCv(store.getState()))
}

const saveCvMiddleware: Middleware = (store) => (dispatch) => (action) => {
  if (!isCvContentChanged(action)) {
    return dispatch(action)
  }

  defer(() => {
    if (selectIsSignedIn(store.getState())) {
      saveCvOfSignedInUser(store)
    } else {
      saveCvOfUnsignedInUser(store)
    }
  })

  return dispatch(action)
}

export default saveCvMiddleware
