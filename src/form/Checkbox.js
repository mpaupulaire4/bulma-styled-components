import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'input-hover-color'() { return this['grey-darker'] },

  get 'input-disabled-color'() { return this['text-light'] },
})

export const CheckboxRadioShared = theme => css`
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
  static displayName ='Checkbox'
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => CheckboxRadioShared(theme)
}
