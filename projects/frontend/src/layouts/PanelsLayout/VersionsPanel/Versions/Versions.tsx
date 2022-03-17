import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useSelectCv,
  useUpdateCvName,
  useMakeCvCopy,
  useDeleteCv,
  useIsCvUpdating,
  useIsCvDeleting,
} from 'services/cv'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import Version from './Version'
import VersionsProps from './Versions.props'

const Container = styled.div`
  & > * + * {
    margin-top: 0.25rem;
  }
`

// eslint-disable-next-line max-statements
const Versions: FC<VersionsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const allCv = useAllCvMetadata()
  const { id, isNew, isSaved } = useCurrentCvMetadata()
  const { isCvUpdating } = useIsCvUpdating()
  const { isCvDeleting } = useIsCvDeleting()
  const selectCv = useSelectCv()
  const updateCvName = useUpdateCvName()
  const makeCvCopy = useMakeCvCopy()
  const deleteCv = useDeleteCv()

  const shouldDisableActiveElements =
    (!isNew && !isSaved) || isCvUpdating || isCvDeleting

  const handleDeleteCv = (id: string, isNew: boolean) => {
    if (isNew) {
      deleteCv(id, isNew)
      return
    }

    if (confirm(t('menu.confirmDelete'))) {
      deleteCv(id, isNew)
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Radio
        value={id}
        vertical
        disabled={shouldDisableActiveElements}
        onChange={selectCv}
      >
        {map(allCv, ({ id, name, isNew }) => (
          <Radio.Item key={id} value={id}>
            <Version
              name={name}
              disabled={shouldDisableActiveElements}
              onUpdateCvName={(newName) => updateCvName(id, newName, isNew)}
              onMakeCvCopy={(copyName) => makeCvCopy(id, copyName)}
              onDelete={() => handleDeleteCv(id, isNew)}
            />
          </Radio.Item>
        ))}
      </Radio>
    </Container>
  )
}

export default Versions
