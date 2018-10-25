import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import {
  tablet,
  desktop,
} from '../utilities/mixins'

BULMA_VARS({
  'column-gap': '0.75rem',
})

export default class Columns extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    margin-left: (-${theme['column-gap']});
    margin-right: (-${theme['column-gap']});
    margin-top: (-${theme['column-gap']});
    &:last-child {
      margin-bottom: (-${theme['column-gap']});
    }
    &:not(:last-child) {
      margin-bottom: calc(1.5rem - ${theme['column-gap']});
    }
    /* Modifiers */
    &.is-centered {
      justify-content: center;
    }
    &.is-gapless {
      margin-left: 0;
      margin-right: 0;
      margin-top: 0;
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    &.is-mobile {
      display: flex;
    }
    &.is-multiline {
      flex-wrap: wrap;
    }
    &.is-vcentered {
      align-items: center;
    }
    /* Responsiveness */
    ${tablet(theme)`
      &:not(.is-desktop) {
        display: flex;
      }
    `}
    ${desktop(theme)`
      &.is-desktop {
        display: flex;
      }
    `}
  `
}
