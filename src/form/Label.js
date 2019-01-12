import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'label-color'() { return this['grey-darker'] },
  get 'label-weight'() { return this['weight-bold'] },
})

export default class Label extends BaseWithConsumer {
  static displayName ='Label'
  static defaultProps = {
    as: 'label',
  }

  static Style = theme => css`
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
