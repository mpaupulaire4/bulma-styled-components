import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'input-hover-color': vars['grey-darker'],

  'input-disabled-color': vars['text-light'],
}))

const defaultProps = { theme: Vars.getVariables() }

export const CheckboxRadioShared = css`
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
  input {
    cursor: pointer;
  }
  &:hover {
    color: ${fromTheme('input-hover-color')};
  }
  &[disabled] {
    color: ${fromTheme('input-disabled-color')};
    cursor: not-allowed;
  }
`

export const Checkbox = styled.label`${CheckboxRadioShared}`
Checkbox.defaultProps = defaultProps
