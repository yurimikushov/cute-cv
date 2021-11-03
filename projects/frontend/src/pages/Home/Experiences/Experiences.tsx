import { FC } from 'react'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import map from 'lodash/map'
import noop from 'lodash/noop'
import H from 'components/H'
import Experience from './Experience'
import ExperiencesPropsT from './Experiences.props'

const experiences = [
  {
    position: 'Frontend developer',
    company: 'GOAT company, inc',
    duration: 'January 2017 - now',
    description: 'I doing an amazing stuff',
  },
  {
    position: '',
    company: '',
    duration: '',
    description: '',
  },
]

const Experiences: FC<ExperiencesPropsT> = ({ className, ...props }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'experience' })

  return (
    <div className={cn(className, 'childs-mt-4')} {...props}>
      <H tag='1'>{t('title')}</H>
      {map(experiences, ({ position, company, duration, description }, i) => (
        <Experience
          key={i}
          position={position}
          company={company}
          duration={duration}
          description={description}
          onPositionChange={noop}
          onCompanyChange={noop}
          onDurationChange={noop}
          onDescriptionChange={noop}
          onDelete={noop}
        />
      ))}
    </div>
  )
}

export default Experiences
