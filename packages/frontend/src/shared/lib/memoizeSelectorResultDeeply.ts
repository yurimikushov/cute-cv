import { createSelectorCreator, defaultMemoize } from 'reselect'
import isEqual from 'shared/lib/isEqual'

const createDeepEqualSelector = createSelectorCreator(defaultMemoize, isEqual)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const memoizeSelectorResultDeeply = <T extends (...args: Array<any>) => any>(
  selector: T
) => {
  return createDeepEqualSelector(selector, (data) => data)
}

export default memoizeSelectorResultDeeply
