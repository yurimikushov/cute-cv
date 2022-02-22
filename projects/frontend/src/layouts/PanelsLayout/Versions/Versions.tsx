import { FC } from 'react'
import styled from 'styled-components'
import map from 'lodash/map'
import noop from 'lodash/noop'
import {
  useAllCvMetadata,
  useCurrentCvMetadata,
  useSelectCv,
} from 'services/cv'
import Card from 'components/Card'
import { H2 } from 'components/H'
import Radio from 'components/Radio'
import Divider from 'components/Divider'
import Button from 'components/Button'
import { panelMixin } from '../mixins'
import VersionsProps from './Versions.props'
import { useIsSignedIn } from 'services/auth'

const Container = styled(Card)`
  ${panelMixin}
`

const Versions: FC<VersionsProps> = (props) => {
  const allCv = useAllCvMetadata()
  const { id } = useCurrentCvMetadata()
  const selectCv = useSelectCv()
  const { isSignedIn } = useIsSignedIn()

  return (
    <Container {...props}>
      <H2>Versions</H2>
      <Radio value={id} vertical onChange={selectCv}>
        {map(allCv, ({ id, name }) => (
          <Radio.Item key={id} value={id}>
            {name}
          </Radio.Item>
        ))}
      </Radio>
      {isSignedIn && (
        <>
          <Divider />
          <Button withPaddings={false} onClick={noop}>
            Add
          </Button>
        </>
      )}
    </Container>
  )
}

export default Versions
