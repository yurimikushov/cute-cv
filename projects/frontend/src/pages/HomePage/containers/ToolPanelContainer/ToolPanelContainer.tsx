import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import useKeyDown from 'shared/hooks/useKeyDown'
import { useEditable } from 'services/edit-cv'
import { useDownloadPDF } from 'services/download-cv'
import Button from 'shared/ui/Button'
import colors from 'shared/styles/colors'
import useSavedStatus from './hooks/useSavedStatus'
import ToolPanelContainerProps from './ToolPanelContainer.props'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SavedStatus = styled.div`
  color: ${colors.gray300};
`

const ToolPanelContainer: FC<ToolPanelContainerProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, toggleEditable } = useEditable()
  const savedStatus = useSavedStatus()
  const { isDownloading } = useDownloadPDF()

  useKeyDown({
    code: 'Space',
    altKey: true,
    listener: toggleEditable,
  })

  return (
    <Container {...props}>
      <SavedStatus>{savedStatus}</SavedStatus>
      <Button
        appearance='text'
        disabled={isDownloading}
        onClick={toggleEditable}
      >
        {editable ? t('preview') : t('edit')}
      </Button>
    </Container>
  )
}

export default ToolPanelContainer
