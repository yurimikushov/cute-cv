import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import { useEditable, useExperiences, MAX_EXPERIENCES_SIZE } from 'services/cv'
import useEffectWhen from 'hooks/useEffectWhen'
import { H1 } from 'components/H'
import DndList from 'components/DndList'
import Button from 'components/Button'
import Experience from './Experience'
import ExperiencesPropsT from './Experiences.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const List = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Experiences: FC<ExperiencesPropsT> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const { editable } = useEditable()
  const {
    experiences,
    handleAdd,
    handlePositionChange,
    handleCompanyChange,
    handleDurationChange,
    handleDescriptionChange,
    handleDelete,
    handleReorder,
  } = useExperiences()

  useEffectWhen(handleAdd, isEmpty(experiences))

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      <List
        isDndDisabled={!editable}
        onDragEnd={(startIndex, endIndex) =>
          handleReorder({ startIndex, endIndex })
        }
      >
        {map(
          experiences,
          ({ id, position, company, duration, description }) => (
            <List.Item key={id}>
              <Experience
                position={position}
                company={company}
                duration={duration}
                description={description}
                onPositionChange={(position) =>
                  handlePositionChange({ id, position })
                }
                onCompanyChange={(company) =>
                  handleCompanyChange({ id, company })
                }
                onDurationChange={(duration) =>
                  handleDurationChange({ id, duration })
                }
                onDescriptionChange={(description) =>
                  handleDescriptionChange({ id, description })
                }
                onDelete={() => handleDelete({ id })}
              />
            </List.Item>
          )
        )}
      </List>
      {editable && size(experiences) < MAX_EXPERIENCES_SIZE && (
        <Add onClick={handleAdd}>Add</Add>
      )}
    </Container>
  )
}

export default Experiences
