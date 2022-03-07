import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'
import size from 'lodash/size'
import map from 'lodash/map'
import {
  useEditable,
  useCurrentCvContent,
  EXPERIENCES_MAX_COUNT,
} from 'services/cv'
import useLayoutEffectWhen from 'hooks/useLayoutEffectWhen'
import { H1 } from 'components/H'
import DndList from 'components/DndList'
import Button from 'components/Button'
import radiuses from 'styles/radiuses'
import Experience from './Experience'
import ExperiencesProps from './Experiences.props'

const Container = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableList = styled(DndList)`
  & > * + * {
    margin-top: 1rem;
  }
`

const DraggableItem = styled(DraggableList.Item)`
  border-radius: ${radiuses.md};
`

const Add = styled(Button)`
  display: block;
  margin: 0.5rem auto 0;
`

const Experiences: FC<ExperiencesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const { editable } = useEditable()
  const {
    cv: { experiences },
    addExperience,
    changeExperience,
    reorderExperience,
    deleteExperience,
  } = useCurrentCvContent()

  useLayoutEffectWhen(addExperience, isEmpty(experiences))

  return (
    <Container {...props}>
      <H1>{t('title')}</H1>
      <DraggableList isDndDisabled={!editable} onDragEnd={reorderExperience}>
        {map(
          experiences,
          ({ id, position, company, duration, description }) => (
            <DraggableItem key={id}>
              <Experience
                position={position}
                company={company}
                duration={duration}
                description={description}
                onPositionChange={(position) =>
                  changeExperience(id, position, company, duration, description)
                }
                onCompanyChange={(company) =>
                  changeExperience(id, position, company, duration, description)
                }
                onDurationChange={(duration) =>
                  changeExperience(id, position, company, duration, description)
                }
                onDescriptionChange={(description) =>
                  changeExperience(id, position, company, duration, description)
                }
                onDelete={() => deleteExperience(id)}
              />
            </DraggableItem>
          )
        )}
      </DraggableList>
      {editable && size(experiences) < EXPERIENCES_MAX_COUNT && (
        <Add appearance='text' onClick={addExperience}>
          {t('add')}
        </Add>
      )}
    </Container>
  )
}

export default Experiences
