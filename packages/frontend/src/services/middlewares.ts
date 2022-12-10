import { editCvMiddlewares } from './edit-cv'
import { shareCvMiddlewares } from './share-cv'

export default [...editCvMiddlewares, ...shareCvMiddlewares] as const
