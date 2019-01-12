/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { Base } from '../base/Class'

export default class Buttons extends Base {
  static displayName ='Buttons'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
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
    &.is-centered {
      justify-content: center;
    }
    &.is-right {
      justify-content: flex-end;
    }
  `
}
