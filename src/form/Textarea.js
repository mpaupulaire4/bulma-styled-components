import { css } from 'emotion'
import { InputTextareaShared } from './Input'
import { BaseWithConsumer } from '../base/Class'

export default class Textarea extends BaseWithConsumer {
  static displayName ='Textarea'
  static defaultProps = {
    as: 'textarea',
  }

  static Style = theme => css`
    ${InputTextareaShared(theme)}
    display: block;
    max-width: 100%;
    min-width: 100%;
    padding: 0.625em;
    resize: vertical;
    &:not([rows]) {
      max-height: 600px;
      min-height: 120px;
    }
    &[rows] {
      height: initial;
    }
    /* Modifiers */
    &.has-fixed-size {
      resize: none;
    }
  `
}
