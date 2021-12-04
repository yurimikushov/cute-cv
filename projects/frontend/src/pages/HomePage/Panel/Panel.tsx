import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { useEditable } from 'services/cv'
import Button from 'components/Button'
import colors from 'styles/colors'
import { useSavedStatus } from './hooks'
import PanelPropsT from './Panel.props'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SavedStatus = styled.div`
  color: ${colors.gray300};
`

const Panel: FC<PanelPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, handleToggle } = useEditable()
  const savedStatus = useSavedStatus()

  return (
    <Container {...props}>
      <SavedStatus>{savedStatus}</SavedStatus>
      <Button onClick={handleToggle}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </Container>
  )
}

export default Panel
