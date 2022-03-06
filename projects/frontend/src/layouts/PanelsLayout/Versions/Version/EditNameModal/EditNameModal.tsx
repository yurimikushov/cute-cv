import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import replace from 'lodash/replace'
import { CV_NAME_MAX_LENGTH } from 'services/cv'
import Modal from 'components/Modal'
import BaseForm, { FormProps } from 'components/Form'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import EditNameModalProps from './EditNameModal.props'

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

const stretchClassName = replace(String(styled.div``), '.', '')

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

const EditNameModal: FC<EditNameModalProps> = ({
  name,
  onSave,
  onClose,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.editNameModal',
  })

  const handleSave = async ({ name }: FormValues) => {
    await onSave(name)
  }

  return (
    <Container {...props} onClose={onClose}>
      <Title>{t('title')}</Title>
      <Form<FC<FormProps<FormValues>>>
        initialValues={{
          name,
        }}
        onSubmit={handleSave}
      >
        <Form.TextInput
          containerClassName={stretchClassName}
          className={stretchClassName}
          size='lg'
          name='name'
          placeholder={t('name.placeholder')}
          maxLength={CV_NAME_MAX_LENGTH}
        />
        <Form.Button type='submit'>{t('save')}</Form.Button>
      </Form>
    </Container>
  )
}

export default EditNameModal
