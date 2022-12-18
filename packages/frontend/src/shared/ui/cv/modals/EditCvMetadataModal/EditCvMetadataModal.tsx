import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import styled from 'styled-components'
import useAutoFocus from 'shared/hooks/useAutoFocus'
import { CV_NAME_MAX_LENGTH } from 'services/edit-cv'
import Modal from 'shared/ui/Modal'
import BaseForm, { FormProps } from 'shared/ui/Form'
import colors from 'shared/styles/colors'
import fonts from 'shared/styles/fonts'
import radiuses from 'shared/styles/radiuses'
import EditCvMetadataModalProps from './EditCvMetadataModal.props'

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

const stretchClassName = styled.div``.toString().replace('.', '')

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

const FieldsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  & .${stretchClassName} {
    min-width: 100%;
    max-width: 100%;
  }
`

type FormValues = {
  name: string
  allowShare: boolean
}

const EditCvMetadataModal: FC<EditCvMetadataModalProps> = ({
  title,
  submitTitle,
  submitSubmittingTitle,
  initialName = '',
  initialAllowShare = false,
  onSubmit,
  onClose,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.editCvMetadataModal',
  })
  const nameInputRef = useAutoFocus<HTMLInputElement>()

  const validationSchema = useMemo(() => {
    return Yup.object({
      name: Yup.string()
        .strict(false)
        .trim()
        .max(CV_NAME_MAX_LENGTH)
        .required(t('name.required')),
    })
  }, [])

  const handleSubmit = async ({ name, allowShare }: FormValues) => {
    // if onSubmit will return void, we will wrap this into Promise
    await Promise.resolve(onSubmit(name, allowShare))
  }

  return (
    <Container {...props} onClose={onClose}>
      <Title>{title ?? t('title')}</Title>
      <Form<FC<FormProps<FormValues>>>
        initialValues={{
          name: initialName,
          allowShare: initialAllowShare,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FieldsContainer>
          <Form.TextInput
            inputRef={nameInputRef}
            containerClassName={stretchClassName}
            className={stretchClassName}
            size='lg'
            name='name'
            placeholder={t('name.placeholder')}
            maxLength={CV_NAME_MAX_LENGTH}
          />
          <Form.Checkbox name='allowShare'>
            {t('allowShare.title')}
          </Form.Checkbox>
        </FieldsContainer>
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

export default EditCvMetadataModal
