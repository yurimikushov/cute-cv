import { AnyAction } from '@reduxjs/toolkit'
import debounce from 'lodash/debounce'
import defer from 'lodash/defer'
import { Middleware, Store } from 'services/store'
import { selectIsSignedIn } from 'services/auth'
import {
  selectCvContent,
  selectCvMetadata,
  isCvContentChanged,
  updateCvMetadata,
} from '../versions'
import { save } from '../save'

const AUTO_SAVE_TIMING = 1_000

const debouncedSave = debounce((store: Store) => {
  const { id, name, number } = selectCvMetadata(store.getState())
  const cv = selectCvContent(store.getState())

  store
    .dispatch(save({ id, name, number, cv }) as unknown as AnyAction)
    .unwrap()
    // @ts-expect-error bad typing
    .then(({ id, savedAt }) => {
      store.dispatch(
        updateCvMetadata({
          id,
          isNew: false,
          isSaved: Boolean(savedAt),
          savedAt: new Date(savedAt),
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