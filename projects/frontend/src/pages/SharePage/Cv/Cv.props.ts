import { useSharableCv } from 'services/share-cv'

type CvProps = {
  className?: string
  cv: NonNullable<ReturnType<typeof useSharableCv>['cv']>
}

export default CvProps
