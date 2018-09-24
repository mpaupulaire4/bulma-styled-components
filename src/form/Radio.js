import { css as emotion_css } from 'emotion'
import { Base } from '../base/Class'
import { CheckboxRadioShared } from './Checkbox'

export default class Radio extends Base {
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => emotion_css`
    ${CheckboxRadioShared(theme)}
    & + .${/* sc-selector */Radio.name} {
      margin-left: 0.5em;
    }
  `
}
