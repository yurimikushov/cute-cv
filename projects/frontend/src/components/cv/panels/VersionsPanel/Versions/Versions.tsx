import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import { H2 } from 'components/ui/H'
import Radio from 'components/ui/Radio'
import Version from './Version'
import VersionsProps from './Versions.props'
import { useVersionsPanel } from '../VersionsPanelContext'

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
    id,
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
      <Radio
        value={id}
        vertical
        disabled={shouldDisableActiveElements}
        onChange={onSelectCv}
      >
        {map(allCv, ({ publicId, id, name, isNew, allowShare }) => (
          <Radio.Item key={id} value={id}>
            <Version
              name={name}
              allowShare={allowShare}
              disabled={shouldDisableActiveElements}
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
          </Radio.Item>
        ))}
      </Radio>
    </Container>
  )
}

export default Versions
