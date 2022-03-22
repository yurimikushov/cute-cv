import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import useKeyDown from 'hooks/useKeyDown'
import { useDownload, useEditable } from 'services/edit-cv'
import Button from 'components/ui/Button'
import colors from 'styles/colors'
import useSavedStatus from './hooks/useSavedStatus'
import ToolPanelProps from './ToolPanel.props'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SavedStatus = styled.div`
  color: ${colors.gray300};
`

const ToolPanel: FC<ToolPanelProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, toggleEditable } = useEditable()
  const savedStatus = useSavedStatus()
  const { isDownloading } = useDownload()

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

export default ToolPanel
