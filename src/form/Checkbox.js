import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'

Vars.addDerivedDefault(vars => ({
  'input-hover-color': vars['grey-darker'],

  'input-disabled-color': vars['text-light'],
}))

export const CheckboxRadioShared = theme => emotion_css`
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
  input {
    cursor: pointer;
  }
  &:hover {
    color: ${theme['input-hover-color']};
  }
  &[disabled] {
    color: ${theme['input-disabled-color']};
    cursor: not-allowed;
  }
`

export default class Checkbox extends BaseWithConsumer {
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => CheckboxRadioShared(theme)
}
