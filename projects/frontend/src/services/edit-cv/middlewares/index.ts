import markAsUnsavedMiddleware from './markAsUnsavedMiddleware'
import saveCvMiddleware from './saveCvMiddleware'

export default [markAsUnsavedMiddleware, saveCvMiddleware] as const
