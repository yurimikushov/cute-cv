type VersionsPanelProps = {
  className?: string
  allCv: Array<{
    publicId?: string
    id: string
    name: string
    isNew: boolean
    allowShare: boolean
  }>
  id: string
  isNew: boolean
  isSaved: boolean
  isCvUpdating: boolean
  isCvDeleting: boolean
  isSignedIn: boolean
  disableActiveElements: boolean
  displayAddButton: boolean
  onAddEmptyCv: () => Promise<{ id: string }>
  onSelectCv: (id: string) => void
  onUpdateCvMetadata: (newMetadata: {
    publicId?: string
    id: string
    name: string
    isNew: boolean
    allowShare: boolean
  }) => Promise<void>
  onMakeCvCopy: (baseCvId: string, copyCvName: string) => void
  onDeleteCv: (id: string, isNew: boolean) => void
}

export default VersionsPanelProps
