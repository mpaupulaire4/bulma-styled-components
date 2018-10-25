/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { rgba, darken } from 'polished'
import { arrow, loader } from '../utilities/mixins'
import {
  control_small,
  control_medium,
  control_large,
} from '../utilities/controls'
import { InputSelectShared } from './Input'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'input-color'() { return this['grey-darker'] },
  get 'input-background-color'() { return this['white'] },
  get 'input-border-color'() { return this['grey-lighter'] },
  get 'input-shadow'() { return `inset 0 1px 2px ${rgba(this['black'], 0.1)}` },

  get 'input-hover-color'() { return this['grey-darker'] },
  get 'input-hover-border-color'() { return this['grey-light'] },

  get 'input-focus-color'() { return this['grey-darker'] },
  get 'input-focus-border-color'() { return this['link'] },
  'input-focus-box-shadow-size': '0 0 0 0.125em',
  get 'input-focus-box-shadow-color'() { return rgba(this['link'], 0.25) },

  get 'input-disabled-color'() { return this['text-light'] },
  get 'input-disabled-background-color'() { return this['background'] },
  get 'input-disabled-border-color'() { return this['background'] },

  get 'input-arrow'() { return this['link'] },

  get 'input-icon-color'() { return this['grey-lighter'] },
  get 'input-icon-active-color'() { return this['grey'] },

  get 'input-radius'() { return this['radius'] },
})

const SelectColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    &:not(:hover)::after {
      border-color: ${color};
    }
    select {
      border-color: ${color};
      &:hover,
      &.is-hovered {
        border-color: ${darken(0.05, color)};
      }
      &:focus,
      &.is-focused,
      &:active,
      &.is-active {
        box-shadow: ${theme['input-focus-box-shadow-size']} ${rgba(color, 0.25)};
      }
    }
  }
`, '')

export default class Select extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    display: inline-block;
    max-width: 100%;
    position: relative;
    vertical-align: top;
    &:not(.is-multiple) {
      height: 2.25em;
    }
    &:not(.is-multiple):not(.is-loading) {
      &::after {
        ${arrow(theme['input-arrow'])}
        right: 1.125em;
        z-index: 4;
      }
    }
    select {
      ${InputSelectShared(theme)}
      cursor: pointer;
      display: block;
      font-size: 1em;
      max-width: 100%;
      outline: none;
      &::-ms-expand {
        display: none;
      }
      &[disabled]:hover {
        border-color: ${theme['input-disabled-border-color']};
      }
      &:not([multiple]) {
        padding-right: 2.5em;
      }
      &[multiple] {
        height: initial;
        padding: 0;
        option {
          padding: 0.5em 1em;
        }
      }
    }
    &.is-rounded {
      select {
        border-radius: ${theme['radius-rounded']};
        padding-left: 1em;
      }
    }
    /* States */
    &:not(.is-multiple):not(.is-loading):hover {
      &::after {
        border-color: ${theme['input-hover-color']};
      }
    }
    /* Colors */
    ${SelectColorClasses(theme)}

    /* Sizes */
    &.is-small {
      ${control_small(theme)}
    }
    &.is-medium {
      ${control_medium(theme)}
    }
    &.is-large {
      ${control_large(theme)}
    }
    /* Modifiers */
    &.is-disabled {
      &::after {
        border-color: ${theme['input-disabled-color']};
      }
    }
    &.is-fullwidth {
      width: 100%;
      select {
        width: 100%;
      }
    }
    &.is-loading {
      &::after {
        ${loader(theme)}
        margin-top: 0;
        position: absolute;
        right: 0.625em;
        top: 0.625em;
        transform: none;
      }
      &.is-small:after {
        font-size: ${theme['size-small']};
      }
      &.is-medium:after {
        font-size: ${theme['size-medium']};
      }
      &.is-large:after {
        font-size: ${theme['size-large']};
      }
    }
  `
}
