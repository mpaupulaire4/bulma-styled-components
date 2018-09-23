/* stylelint-disable no-descending-specificity */
import { css as emotion_css } from 'emotion'
import { Base } from '../base/Class'

export default class Tags extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    &:last-child {
      margin-bottom: -0.5rem;
    }
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
    &.has-addons {
      /* styles defined in Tag */
    }
    &.is-centered {
      justify-content: center;
    }
    &.is-right {
      justify-content: flex-end;
    }
  `
}