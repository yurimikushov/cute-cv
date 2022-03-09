import { FC, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import styled from 'styled-components'
import replace from 'lodash/replace'
import useAutoFocus from 'hooks/useAutoFocus'
import { CV_NAME_MAX_LENGTH } from 'services/cv'
import Modal from 'components/Modal'
import BaseForm, { FormProps } from 'components/Form'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import MakeCopyModalProps from './MakeCopyModal.props'

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

const MakeCopyModal: FC<MakeCopyModalProps> = ({
  onSubmit,
  onClose,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.makeCopyModal',
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

  const handleSave = ({ name }: FormValues) => {
    onSubmit(name)
  }

  return (
    <Container {...props} onClose={onClose}>
      <Title>{t('title')}</Title>
      <Form<FC<FormProps<FormValues>>>
        initialValues={{
          name: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSave}
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
        <Form.Button type='submit' appearance='outlined'>
          {t('makeCopy')}
        </Form.Button>
      </Form>
    </Container>
  )
}

export default MakeCopyModal
