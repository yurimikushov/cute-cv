import { AnyAction } from '@reduxjs/toolkit'
import debounce from 'lodash/debounce'
import defer from 'lodash/defer'
import { Middleware, Store } from 'services/store'
import { selectIsSignedIn } from 'services/auth'
import {
  markAsUnsaved,
  selectCurrentCvId,
  selectCvContent,
  selectCvMetadata,
  isCvContentChanged,
} from './versions'
import { save } from './save'

const AUTO_SAVE_TIMING = 1_000

const debouncedSave = debounce((store: Store) => {
  const { id, name, number } = selectCvMetadata(store.getState())
  const cv = selectCvContent(store.getState())

  store.dispatch(save({ id, name, number, cv }) as unknown as AnyAction)
}, AUTO_SAVE_TIMING)

const markAsUnsavedMiddleware: Middleware =
  (store) => (dispatch) => (action) => {
    if (!selectIsSignedIn(store.getState())) {
      return dispatch(action)
    }

    if (isCvContentChanged(action)) {
      defer(() =>
        dispatch(markAsUnsaved({ id: selectCurrentCvId(store.getState()) }))
      )
    }

    return dispatch(action)
  }

const saveCvMiddleware: Middleware = (store) => (dispatch) => (action) => {
  if (!selectIsSignedIn(store.getState())) {
    return dispatch(action)
  }

  if (isCvContentChanged(action)) {
    defer(() => debouncedSave(store))
  }

  return dispatch(action)
}

export default [markAsUnsavedMiddleware, saveCvMiddleware] as const
