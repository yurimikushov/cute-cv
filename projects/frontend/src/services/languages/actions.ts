import { createAction, nanoid } from '@reduxjs/toolkit'

const addLanguage = createAction('languages/add', () => ({
  payload: {
    id: nanoid(),
    language: '',
  },
}))

const updateLanguage = createAction(
  'languages/update',
  (id: string, language: string) => ({
    payload: {
      id,
      language,
    },
  })
)

const deleteLanguage = createAction('languages/delete', (id: string) => ({
  payload: {
    id,
  },
}))

export { addLanguage, updateLanguage, deleteLanguage }
