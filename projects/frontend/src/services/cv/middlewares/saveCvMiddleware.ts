import { AnyAction } from '@reduxjs/toolkit'
import debounce from 'lodash/debounce'
import defer from 'lodash/defer'
import { Middleware, Store } from 'services/store'
import { selectIsSignedIn } from 'services/auth'
import {
  selectCurrentCv,
  isCvContentChanged,
  updateCvMetadata,
} from '../versions'
import { save, SaveResult } from '../save'

const AUTO_SAVE_TIMING = 1_000

const debouncedSave = debounce((store: Store) => {
  const { metadata, content } = selectCurrentCv(store.getState())
  const { id, name, number } = metadata

  store
    .dispatch(save({ id, name, number, cv: content }) as unknown as AnyAction)
    .unwrap()
    .then(({ id, savedAt }: SaveResult) => {
      store.dispatch(
        updateCvMetadata({
          id,
          isNew: false,
          isSaved: Boolean(savedAt),
          savedAt,
        })
      )
    })
}, AUTO_SAVE_TIMING)

const saveCvMiddleware: Middleware = (store) => (dispatch) => (action) => {
  if (!selectIsSignedIn(store.getState())) {
    return dispatch(action)
  }

  if (isCvContentChanged(action)) {
    defer(() => debouncedSave(store))
  }

  return dispatch(action)
}

export default saveCvMiddleware
