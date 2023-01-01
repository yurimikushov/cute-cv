import { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Button from 'shared/ui/Button'
import AddButtonProps from './AddButton.props'

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Language: VFC<AddButtonProps> = ({ onClick }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'languages' })

  return (
    <Add appearance='text' onClick={onClick}>
      {t('add')}
    </Add>
  )
}

export default Language
