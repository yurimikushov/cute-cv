import defer from 'shared/lib/defer'
import { Middleware } from 'services/store'
import { selectIsSignedIn } from 'services/auth'
import {
  markAsUnsaved,
  selectCurrentCvId,
  isCvContentChanged,
} from '../versions'

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

export default markAsUnsavedMiddleware
