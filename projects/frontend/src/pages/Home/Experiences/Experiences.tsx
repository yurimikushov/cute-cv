import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import { useExperiences } from 'services/cv'
import H from 'components/H'
import Button from 'components/Button'
import Experience from './Experience'
import ExperiencesPropsT from './Experiences.props'

const Experiences: FC<ExperiencesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })
  const {
    experiences,
    handleAdd,
    handlePositionChange,
    handleCompanyChange,
    handleDurationChange,
    handleDescriptionChange,
    handleDelete,
  } = useExperiences()

  return (
    <div className={cn(className, 'childs-mt-4')} {...props}>
      <H tag='1'>{t('title')}</H>
      {map(
        experiences,
        ({ id, position, company, duration, description }, i) => (
          <Experience
            key={id}
            position={position}
            company={company}
            duration={duration}
            description={description}
            onPositionChange={(position) =>
              handlePositionChange({ id, position })
            }
            onCompanyChange={(company) => handleCompanyChange({ id, company })}
            onDurationChange={(duration) =>
              handleDurationChange({ id, duration })
            }
            onDescriptionChange={(description) =>
              handleDescriptionChange({ id, description })
            }
            onDelete={() => handleDelete({ id })}
          />
        )
      )}
      <Button className='block mx-auto mt-2' onClick={handleAdd}>
        Add
      </Button>
    </div>
  )
}

export default Experiences
