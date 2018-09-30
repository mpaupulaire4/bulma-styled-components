/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import Vars from '../utilities/vars'
import { overlay } from '../utilities/mixins'

Vars.addDerivedDefault(() => ({
  dimensions: [16, 24, 32, 48, 64, 96, 128],
}))

export default class Image extends BaseWithConsumer {
  static defaultProps = {
    as: 'figure',
  }

  static Style = theme => css`
    display: block;
    position: relative;
    img {
      display: block;
      height: auto;
      width: 100%;
      &.is-rounded {
        border-radius: ${theme['radius-rounded']};
      }
    }
    /* Ratio */
    &.is-square,
    &.is-1by1,
    &.is-5by4,
    &.is-4by3,
    &.is-3by2,
    &.is-5by3,
    &.is-16by9,
    &.is-2by1,
    &.is-3by1,
    &.is-4by5,
    &.is-3by4,
    &.is-2by3,
    &.is-3by5,
    &.is-9by16,
    &.is-1by2,
    &.is-1by3 {
      img {
        ${overlay()}
        height: 100%;
        width: 100%;
      }
    }
    &.is-square,
    &.is-1by1 {
      padding-top: 100%;
    }
    &.is-5by4 {
      padding-top: 80%;
    }
    &.is-4by3 {
      padding-top: 75%;
    }
    &.is-3by2 {
      padding-top: 66.6666%;
    }
    &.is-5by3 {
      padding-top: 60%;
    }
    &.is-16by9 {
      padding-top: 56.25%;
    }
    &.is-2by1 {
      padding-top: 50%;
    }
    &.is-3by1 {
      padding-top: 33.3333%;
    }
    &.is-4by5 {
      padding-top: 125%;
    }
    &.is-3by4 {
      padding-top: 133.3333%;
    }
    &.is-2by3 {
      padding-top: 150%;
    }
    &.is-3by5 {
      padding-top: 166.6666%;
    }
    &.is-9by16 {
      padding-top: 177.7777%;
    }
    &.is-1by2 {
      padding-top: 200%;
    }
    &.is-1by3 {
      padding-top: 300%;
    }

    /* Sizes */
    ${theme['dimensions'].reduce((acc, dim) => `
      ${acc}
      &.is-${dim}x${dim} {
        height: ${dim}px;
        width: ${dim}px;
      }
    `, '')}
  `
}
