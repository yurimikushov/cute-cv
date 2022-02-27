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
  MAX_CV_VERSIONS,
} from 'services/cv'
import Card from 'components/Card'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import Divider from 'components/Divider'
import Button, { CloseButton } from 'components/Button'
import { panelMixin } from '../mixins'
import VersionsProps from './Versions.props'

const Container = styled(Card)`
  ${panelMixin}
`

const Item = styled(Radio.Item)`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
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
          <Item key={id} value={id}>
            {name}
            <CloseButton
              disabled={shouldDisable}
              onClick={(e) => {
                e.stopPropagation() // to not affect onChange event of radio
                handleDeleteCv(id, isNew)
              }}
            />
          </Item>
        ))}
      </Radio>
      {isSignedIn && cvCount < MAX_CV_VERSIONS && (
        <>
          <Divider />
          <Button withPaddings={false} onClick={handleAddCv}>
            {t('add')}
          </Button>
        </>
      )}
    </Container>
  )
}

export default Versions
