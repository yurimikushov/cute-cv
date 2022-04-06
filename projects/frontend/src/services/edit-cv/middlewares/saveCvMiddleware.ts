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
import { add } from '../add'
import { update } from '../update'

const AUTO_SAVE_TIMING = 1_000

const saveCvOfSignedInUser = debounce((store: Store) => {
  const { metadata, content } = selectCurrentCv(store.getState())
  const { publicId, id, name, number, allowShare } = metadata

  if (isNil(publicId)) {
    store
      .dispatch(add({ name, number, allowShare, cv: content }))
      .unwrap()
      .then(({ publicId, savedAt, allowShare }) => {
        store.dispatch(
          updateCvMetadata({
            publicId,
            id,
            isNew: false,
            isSaved: Boolean(savedAt),
            savedAt,
            allowShare,
          })
        )
      })
  } else {
    store
      .dispatch(
        update({
          publicId,
          name,
          number,
          allowShare,
          cv: content,
        })
      )
      .unwrap()
      .then(({ publicId, savedAt, allowShare }) => {
        store.dispatch(
          updateCvMetadata({
            publicId,
            id,
            isNew: false,
            isSaved: Boolean(savedAt),
            savedAt,
            allowShare,
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
