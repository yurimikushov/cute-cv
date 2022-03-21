import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import useKeyDown from 'hooks/useKeyDown'
import { useDownload, useEditable } from 'services/cv'
import Button from 'components/ui/Button'
import colors from 'styles/colors'
import useSavedStatus from './hooks/useSavedStatus'
import PanelProps from './Panel.props'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SavedStatus = styled.div`
  color: ${colors.gray300};
`

const Panel: FC<PanelProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'panel' })
  const { editable, handleToggle } = useEditable()
  const savedStatus = useSavedStatus()
  const { isDownloading } = useDownload()

  useKeyDown({
    code: 'Space',
    altKey: true,
    listener: handleToggle,
  })

  return (
    <Container {...props}>
      <SavedStatus>{savedStatus}</SavedStatus>
      <Button appearance='text' disabled={isDownloading} onClick={handleToggle}>
        {editable ? t('preview') : t('edit')}
      </Button>
    </Container>
  )
}

export default Panel
