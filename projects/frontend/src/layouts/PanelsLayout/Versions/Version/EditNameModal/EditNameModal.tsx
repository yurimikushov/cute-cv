import { FC, ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { CV_NAME_MAX_LENGTH } from 'services/cv'
import Modal from 'components/Modal'
import TextInput from 'components/TextInput'
import Button from 'components/Button'
import colors from 'styles/colors'
import fonts from 'styles/fonts'
import radiuses from 'styles/radiuses'
import EditNameModalProps from './EditNameModal.props'

const Container = styled(Modal)`
  width: 26rem;
  padding: 2rem 3rem;
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

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

const Name = styled(TextInput)`
  min-width: 100%;
`

const EditNameModal: FC<EditNameModalProps> = ({
  name,
  isSaving,
  onSave,
  onClose,
  ...props
}) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'versions.editNameModal',
  })
  const [currentName, setCurrentName] = useState(name)

  useEffect(() => {
    setCurrentName(name)
  }, [name])

  const handleChangeCurrentName = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentName(e.target.value)
  }

  const handleSave = (e: FormEvent) => {
    e.preventDefault()
    onSave(currentName)
  }

  return (
    <Container {...props} onClose={onClose}>
      <Title>{t('title')}</Title>
      <Form onSubmit={handleSave}>
        <Name
          size='lg'
          value={currentName}
          placeholder={t('name.placeholder')}
          disabled={isSaving}
          maxLength={CV_NAME_MAX_LENGTH}
          onChange={handleChangeCurrentName}
        />
        <Button type='submit' disabled={isSaving}>
          {t('save')}
        </Button>
      </Form>
    </Container>
  )
}

export default EditNameModal
