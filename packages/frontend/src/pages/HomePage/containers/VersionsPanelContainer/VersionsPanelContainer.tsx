import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'services/auth'
import {
  useAllCv,
  useCurrentCvMetadata,
  useIsCvAdding,
  useIsCvUpdating,
  useIsCvDeleting,
  useAddEmptyCv,
  useMakeCvCopy,
  useUpdateCvMetadata,
  useDeleteCv,
  useCurrentCvId,
} from 'services/edit-cv'
import { useWithNotification } from 'shared/ui/Notifications'
import VersionsPanel from 'shared/ui/cv/panels/VersionsPanel'
import useShouldDisplayAddButton from './hooks/useShouldDisplayAddButton'
import useShouldDisableActiveElements from './hooks/useShouldDisableActiveElements'

// eslint-disable-next-line max-statements
const VersionsPanelContainer: FC = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const { isSignedIn } = useAuth()
  const { data: allCv } = useAllCv({ skip: !isSignedIn })
  const [currentId, selectCv] = useCurrentCvId()
  const [{ isNew, isSaved } = { isNew: true, isSaved: false }] = useCurrentCvMetadata()
  const { isCvAdding } = useIsCvAdding()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()
  const addEmptyCv = useWithNotification(useAddEmptyCv(), {
    successContent: t('notifications.addResult.success'),
    errorContent: t('notifications.addResult.error'),
  })
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
      allCv={allCv ?? []}
      id={currentId ?? ''}
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
