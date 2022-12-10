import { ReactNode } from 'react'
import { FormikValues, FormikHelpers } from 'formik'

type FormProps<T extends FormikValues> = {
  className?: string
  initialValues: T
  validationSchema?: unknown | (() => unknown)
  children: ReactNode
  onSubmit: (
    values: T,
    formikHelpers: FormikHelpers<T>
  ) => void | Promise<unknown>
}

export default FormProps
