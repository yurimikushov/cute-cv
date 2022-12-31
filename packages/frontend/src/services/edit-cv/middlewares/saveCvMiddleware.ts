import debounce from 'shared/lib/debounce'
import defer from 'shared/lib/defer'
import cvApi from 'shared/api/cv'
import { Middleware, Store } from 'services/store'
import { getIsSignedIn } from 'services/auth'
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

  if (publicId) {
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
  } else {
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
  }
}, AUTO_SAVE_TIMING)

const saveCvOfUnsignedInUser = (store: Store) => {
  const { metadata, content } = selectCurrentCv(store.getState())
  const { publicId } = metadata

  cvApi.saveCvOfUnsignedInUser({
    metadata: {
      ...metadata,
      publicId,
    },
    content,
  })
}

const saveCvMiddleware: Middleware = (store) => (dispatch) => (action) => {
  if (!isCvContentChanged(action)) {
    return dispatch(action)
  }

  defer(() => {
    if (getIsSignedIn()) {
      saveCvOfSignedInUser(store)
    } else {
      saveCvOfUnsignedInUser(store)
    }
  })

  return dispatch(action)
}

export default saveCvMiddleware
