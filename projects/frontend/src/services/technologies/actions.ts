import { createAction } from '@reduxjs/toolkit'

const updateTechnologies = createAction(
  'technologies/update',
  (technologies: string) => ({
    payload: {
      technologies,
    },
  })
)

export { updateTechnologies }
