import { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'services/auth'
import {
  useAllCv,
  useAddCv,
  useDeleteCv,
  useCurrentCvMetadata,
  // useAddEmptyCv,
  // useMakeCvCopy,
  useCurrentCvId,
} from 'services/edit-cv'
import { useUpdateCurrentCv } from 'services/edit-cv/stores/cv-store'
import { useWithNotification } from 'shared/ui/Notifications'
import VersionsPanel from 'shared/ui/cv/panels/VersionsPanel'
import useShouldDisplayAddButton from './hooks/useShouldDisplayAddButton'
import useShouldDisableActiveElements from './hooks/useShouldDisableActiveElements'

// eslint-disable-next-line max-statements
const VersionsPanelContainer: VFC = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { isSignedIn } = useAuth()
  const { data: allCv } = useAllCv({ skip: !isSignedIn })
  const { addCv } = useAddCv()
  const { isDeleting, deleteCv } = useDeleteCv()
  const { id, updateCurrentId } = useCurrentCvId()
  const { isUpdating } = useUpdateCurrentCv()
  const {
    metadata: { isNew, isSaved } = { isNew: true, isSaved: false },
    updateMetadata,
  } = useCurrentCvMetadata()

  const handleAddEmptyCv = useWithNotification(addCv, {
    successContent: t('notifications.addResult.success'),
    errorContent: t('notifications.addResult.error'),
  })
  const handleUpdateCvMetadata = useWithNotification(updateMetadata, {
    successContent: t('notifications.updateMetadataResult.success'),
    errorContent: t('notifications.updateMetadataResult.error'),
  })
  const handleMakeCvCopy = useWithNotification(() => Promise.resolve(), {
    successContent: t('notifications.makeCopyResult.success'),
    errorContent: t('notifications.makeCopyResult.error'),
  })
  const handleDeleteCv = useWithNotification(deleteCv, {
    successContent: t('notifications.deleteResult.success'),
    errorContent: t('notifications.deleteResult.error'),
  })

  const shouldDisplayAddButton = useShouldDisplayAddButton()
  const shouldDisableActiveElements = useShouldDisableActiveElements()

  return (
    <VersionsPanel
      {...props}
      allCv={allCv ?? []}
      id={id ?? ''}
      isNew={isNew}
      isSaved={isSaved}
      isCvUpdating={isUpdating}
      isCvDeleting={isDeleting}
      isSignedIn={isSignedIn}
      disableActiveElements={shouldDisableActiveElements}
      displayAddButton={shouldDisplayAddButton}
      onAddEmptyCv={handleAddEmptyCv}
      onSelectCvId={updateCurrentId}
      onUpdateCvMetadata={handleUpdateCvMetadata}
      onMakeCvCopy={handleMakeCvCopy}
      onDeleteCv={handleDeleteCv}
    />
  )
}

export default VersionsPanelContainer
