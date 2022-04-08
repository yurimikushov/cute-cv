import { FC } from 'react'
import { useIsSignedIn } from 'services/auth'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useIsCvUpdating,
  useIsCvDeleting,
  useAddEmptyCv,
  useSelectCv,
  useMakeCvCopy,
  useUpdateCvMetadata,
  useDeleteCv,
} from 'services/edit-cv'
import VersionsPanel from 'components/cv/panels/VersionsPanel'
import useShouldDisplayAddButton from './hooks/useShouldDisplayAddButton'
import useShouldDisableActiveElements from './hooks/useShouldDisableActiveElements'

// eslint-disable-next-line max-statements
const VersionsPanelContainer: FC = (props) => {
  const { isSignedIn } = useIsSignedIn()
  const allCv = useAllCvMetadata()
  const { id, isNew, isSaved } = useCurrentCvMetadata()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()
  const addEmptyCv = useAddEmptyCv()
  const selectCv = useSelectCv()
  const updateCvMetadata = useUpdateCvMetadata()
  const makeCvCopy = useMakeCvCopy()
  const deleteCv = useDeleteCv()

  const shouldDisplayAddButton = useShouldDisplayAddButton()
  const shouldDisableActiveElements = useShouldDisableActiveElements()

  return (
    <VersionsPanel
      {...props}
      allCv={allCv}
      id={id}
      isNew={isNew}
      isSaved={isSaved}
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
