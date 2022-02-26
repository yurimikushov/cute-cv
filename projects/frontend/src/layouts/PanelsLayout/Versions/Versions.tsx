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
  MAX_CV_VERSIONS,
} from 'services/cv'
import Card from 'components/Card'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import VersionsProps from './Versions.props'

const Container = styled(Card)`
  ${panelMixin}
`

const Versions: FC<VersionsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'versions' })
  const cvCount = useCvCount()
  const allCv = useAllCvMetadata()
  const { id } = useCurrentCvMetadata()
  const selectCv = useSelectCv()
  const { isSignedIn } = useIsSignedIn()

  const addCv = useAddCv()

  return (
    <Container {...props}>
      <H2>{t('title')}</H2>
      <Radio value={id} vertical onChange={selectCv}>
        {map(allCv, ({ id, name }) => (
          <Radio.Item key={id} value={id}>
            {name}
          </Radio.Item>
        ))}
      </Radio>
      {isSignedIn && cvCount < MAX_CV_VERSIONS && (
        <>
          <Divider />
          <Button withPaddings={false} onClick={addCv}>
            {t('add')}
          </Button>
        </>
      )}
    </Container>
  )
}

export default Versions
