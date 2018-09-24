import { css as emotion_css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'

Vars.addDerivedDefault(vars => ({
  'label-color': vars['grey-darker'],
  'label-weight': vars['weight-bold'],
}))

export default class Label extends BaseWithConsumer {
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => emotion_css`
    color: ${theme['label-color']};
    display: block;
    font-size: ${theme['size-normal']};
    font-weight: ${theme['label-weight']};
    &:not(:last-child) {
      margin-bottom: 0.5em;
    }
    /* Sizes */
    &.is-small {
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
    }
    &.is-large {
      font-size: ${theme['size-large']};
    }
  `
}
