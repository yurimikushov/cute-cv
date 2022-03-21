import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import styled from 'styled-components'
import replace from 'lodash/replace'
import useAutoFocus from 'hooks/useAutoFocus'
import { CV_NAME_MAX_LENGTH } from 'services/cv'
import Modal from 'components/ui/Modal'
import BaseForm, { FormProps } from 'components/ui/Form'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import EditCvModalProps from './EditCvModal.props'

const Container = styled(Modal)`
  width: 24rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  border-radius: ${radiuses.md};
`

const Title = styled.h1`
  font-size: ${fonts.size['2xl']};
  font-weight: bold;
  color: ${colors.black};
`

const stretchClassName = replace(styled.div``.toString(), '.', '')

const Form = styled(BaseForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & .${stretchClassName} {
    min-width: 100%;
    max-width: 100%;
  }
`

type FormValues = {
  name: string
}

const EditCvModal: FC<EditCvModalProps> = ({
  title,
  submitTitle,
  submitSubmittingTitle,
  initialName = '',
  onSubmit,
  onClose,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.editCvModal',
  })
  const nameInputRef = useAutoFocus<HTMLInputElement>()

  const validationSchema = useMemo(() => {
    return Yup.object({
      // eslint-disable-next-line lodash/prefer-lodash-method
      name: Yup.string()
        .strict(false)
        .trim()
        .max(CV_NAME_MAX_LENGTH)
        .required(t('name.required')),
    })
  }, [])

  const handleSubmit = async ({ name }: FormValues) => {
    // if onSubmit will return void, we will wrap this into Promise
    await Promise.resolve(onSubmit(name))
  }

  return (
    <Container {...props} onClose={onClose}>
      <Title>{title ?? t('title')}</Title>
      <Form<FC<FormProps<FormValues>>>
        initialValues={{
          name: initialName,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form.TextInput
          inputRef={nameInputRef}
          containerClassName={stretchClassName}
          className={stretchClassName}
          size='lg'
          name='name'
          placeholder={t('name.placeholder')}
          maxLength={CV_NAME_MAX_LENGTH}
        />
        <Form.Button
          type='submit'
          appearance='outlined'
          submittingContent={submitSubmittingTitle}
        >
          {submitTitle ?? t('submit')}
        </Form.Button>
      </Form>
    </Container>
  )
}

export default EditCvModal
