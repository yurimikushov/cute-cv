import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useIsSignedIn } from 'services/auth'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useIsCvAdding,
  useIsCvUpdating,
  useIsCvDeleting,
  useAddEmptyCv,
  useSelectCv,
  useMakeCvCopy,
  useUpdateCvMetadata,
  useDeleteCv,
} from 'services/edit-cv'
import { useWithNotification } from 'shared/ui/Notifications'
import VersionsPanel from 'shared/ui/cv/panels/VersionsPanel'
import useShouldDisplayAddButton from './hooks/useShouldDisplayAddButton'
import useShouldDisableActiveElements from './hooks/useShouldDisableActiveElements'

// eslint-disable-next-line max-statements
const VersionsPanelContainer: FC = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { isSignedIn } = useIsSignedIn()
  const allCv = useAllCvMetadata()
  const { id, isNew, isSaved } = useCurrentCvMetadata()
  const { isCvAdding } = useIsCvAdding()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()
  const addEmptyCv = useWithNotification(useAddEmptyCv(), {
    successContent: t('notifications.addResult.success'),
    errorContent: t('notifications.addResult.error'),
  })
  const selectCv = useSelectCv()
  const updateCvMetadata = useWithNotification(useUpdateCvMetadata(), {
    successContent: t('notifications.updateMetadataResult.success'),
    errorContent: t('notifications.updateMetadataResult.error'),
  })
  const makeCvCopy = useWithNotification(useMakeCvCopy(), {
    successContent: t('notifications.makeCopyResult.success'),
    errorContent: t('notifications.makeCopyResult.error'),
  })
  const deleteCv = useWithNotification(useDeleteCv(), {
    successContent: t('notifications.deleteResult.success'),
    errorContent: t('notifications.deleteResult.error'),
  })

  const shouldDisplayAddButton = useShouldDisplayAddButton()
  const shouldDisableActiveElements = useShouldDisableActiveElements()

  return (
    <VersionsPanel
      {...props}
      allCv={allCv}
      id={id}
      isNew={isNew}
      isSaved={isSaved}
      isCvAdding={isCvAdding}
      isCvUpdating={isCvUpdating}
      isCvDeleting={isCvDeleting}
      isSignedIn={isSignedIn}
      disableActiveElements={shouldDisableActiveElements}
      displayAddButton={shouldDisplayAddButton}
      onAddEmptyCv={addEmptyCv}
      onSelectCv={selectCv}
      onUpdateCvMetadata={updateCvMetadata}
      onMakeCvCopy={makeCvCopy}
      onDeleteCv={deleteCv}
    />
  )
}

export default VersionsPanelContainer
