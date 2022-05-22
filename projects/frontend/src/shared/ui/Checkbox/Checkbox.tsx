import { FC } from 'react'
import styled from 'styled-components'
import { ReactComponent as CheckmarkIcon } from 'shared/icons/checkmark.svg'
import colors from 'shared/styles/colors'
import radiuses from 'shared/styles/radiuses'
import focusMixin from 'shared/styles/mixins/focus'
import useCheckbox from './hooks/useCheckbox'
import CheckboxProps from './Checkbox.props'

const Container = styled.label<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  user-select: none;
  cursor: pointer;
  ${({ disabled }) => disabled && 'cursor: not-allowed;'};
`

const HiddenCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  display: none;
`

const Checkmark = styled(CheckmarkIcon)<{
  value: boolean
  disabled: boolean
}>`
  ${focusMixin}

  width: 1.3rem;
  height: 1.3rem;
  color: ${colors.gray200};
  border-radius: ${radiuses.sm};

  & > line {
    color: ${colors.black};
  }

  ${({ value }) =>
    !value &&
    `
    & > line {
      display: none;
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
    color: ${colors.gray100};

    & > line {
      color: ${colors.gray200};
    }
  `}
`

const Label = styled.span`
  color: ${colors.gray300};
`

const Checkbox: FC<CheckboxProps> = ({ children, ...props }) => {
  const { containerProps, checkboxInputProps, checkmarkProps } =
    useCheckbox(props)

  return (
    <Container {...containerProps}>
      <HiddenCheckbox {...checkboxInputProps} type='checkbox' />
      <Checkmark {...checkmarkProps} />
      <Label>{children}</Label>
    </Container>
  )
}

export default Checkbox
