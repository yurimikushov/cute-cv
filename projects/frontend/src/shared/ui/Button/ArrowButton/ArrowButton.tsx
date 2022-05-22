import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as ArrowBottomIcon } from 'shared/icons/arrow-bottom.svg'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'
import ArrowButtonProps from './ArrowButton.props'

const ArrowButton: FC<ArrowButtonProps> = styled.button.attrs({
  children: <ArrowBottomIcon />,
})`
  ${focusMixin}

  width: 0.9rem;
  height: 0.9rem;
  color: ${colors.gray200};
  border-radius: ${radiuses.sm};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    color: ${colors.gray300};
  }
`

ArrowButton.displayName = 'ArrowButton'

export default ArrowButton
