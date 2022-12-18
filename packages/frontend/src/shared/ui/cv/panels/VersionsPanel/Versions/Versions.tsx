import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { H2 } from 'shared/ui/H'
import { useVersionsPanel } from '../VersionsPanelContext'
import Version from './Version'
import VersionsProps from './Versions.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

const Versions: FC<VersionsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const {
    isCvUpdating,
    isCvDeleting,
    id: selectedId,
    isNew,
    isSaved,
    allCv,
    onSelectCv,
    onUpdateCvMetadata,
    onMakeCvCopy,
    onDeleteCv,
  } = useVersionsPanel()

  const shouldDisableActiveElements =
    (!isNew && !isSaved) || isCvUpdating || isCvDeleting

  const handleDeleteCv = (id: string, isNew: boolean) => {
    if (isNew) {
      onDeleteCv(id, isNew)
      return
    }

    if (confirm(t('menu.confirmDelete'))) {
      onDeleteCv(id, isNew)
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      {allCv.map(({ publicId, id, name, isNew, allowShare }) => (
        <Version
          key={id}
          name={name}
          current={id === selectedId}
          allowShare={allowShare}
          disabled={shouldDisableActiveElements}
          onSelectCv={() => onSelectCv(id)}
          onUpdateCvMetadata={(newName, allowShare) =>
            onUpdateCvMetadata({
              publicId,
              id,
              name: newName,
              isNew,
              allowShare,
            })
          }
          onMakeCvCopy={(copyName) => onMakeCvCopy(id, copyName)}
          onDelete={() => handleDeleteCv(id, isNew)}
        />
      ))}
    </Container>
  )
}

export default Versions
