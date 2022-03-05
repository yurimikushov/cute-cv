import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import map from 'lodash/map'
import { useIsSignedIn } from 'services/auth'
import {
  useCvCount,
  useAllCvMetadata,
  useCurrentCvMetadata,
  useSelectCv,
  useAddCv,
  useDeleteCv,
  useIsCvSaving,
  useIsCvDeleting,
  CV_VERSIONS_MAX_COUNT,
} from 'services/cv'
import Card from 'components/Card'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import Version from './Version'
import VersionsProps from './Versions.props'

const Container = styled(Card)`
  ${panelMixin}
`

// eslint-disable-next-line max-statements
const Versions: FC<VersionsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const cvCount = useCvCount()
  const allCv = useAllCvMetadata()
  const { id, isNew, isSaved } = useCurrentCvMetadata()
  const selectCv = useSelectCv()
  const addCv = useAddCv()
  const deleteCv = useDeleteCv()
  const { isCvSaving } = useIsCvSaving()
  const { isCvDeleting } = useIsCvDeleting()
  const { isSignedIn } = useIsSignedIn()

  const shouldDisable = (!isNew && !isSaved) || isCvSaving || isCvDeleting

  const handleAddCv = () => {
    addCv()
  }

  const handleEditCvName = (id: string) => {
    console.log('updateCvName', { id })
  }

  const handleDeleteCv = (id: string, isNew: boolean) => {
    if (confirm(t('confirmDelete'))) {
      deleteCv(id, isNew)
    }
  }

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Radio value={id} vertical disabled={shouldDisable} onChange={selectCv}>
        {map(allCv, ({ id, name, isNew }) => (
          <Radio.Item key={id} value={id}>
            <Version
              name={name}
              disabled={shouldDisable}
              onEditCvName={() => handleEditCvName(id)}
              onDelete={() => handleDeleteCv(id, isNew)}
            />
          </Radio.Item>
        ))}
      </Radio>
      {isSignedIn && cvCount < CV_VERSIONS_MAX_COUNT && (
        <>
          <Divider />
          <Button
            withPaddings={false}
            disabled={shouldDisable}
            onClick={handleAddCv}
          >
            {t('add')}
          </Button>
        </>
      )}
    </Container>
  )
}

export default Versions
