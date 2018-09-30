/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import Label from './Label'
import Select from './Select'
import Input from './Input'
import Control from './Control'
import Button from '../elements/Button'
import {
  tablet,
  mobile,
} from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'

export default class Field extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
    /* Modifiers */
    &.has-addons {
      display: flex;
      justify-content: flex-start;
      .${/* sc-custom '.control' */Control.name} {
        &:not(:last-child) {
          margin-right: -1px;
        }
        &:not(:first-child):not(:last-child) {
          .${/* sc-custom '.button' */Button.name},
          .${/* sc-custom '.input' */Input.name},
          .${/* sc-custom '.select' */Select.name} select {
            border-radius: 0;
          }
        }
        &:first-child {
          .${/* sc-custom '.button' */Button.name},
          .${/* sc-custom '.input' */Input.name},
          .${/* sc-custom '.select' */Select.name} select {
            border-bottom-right-radius: 0;
            border-top-right-radius: 0;
          }
        }
        &:last-child {
          .${/* sc-custom '.button' */Button.name},
          .${/* sc-custom '.input' */Input.name},
          .${/* sc-custom '.select' */Select.name} select {
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
          }
        }
        .${/* sc-custom '.button' */Button.name},
        .${/* sc-custom '.input' */Input.name},
        .${/* sc-custom '.select' */Select.name} select {
          &:hover,
          &.is-hovered {
            z-index: 2;
          }
          &:focus,
          &.is-focused,
          &:active,
          &.is-active {
            z-index: 3;
            &:hover {
              z-index: 4;
            }
          }
        }
        &.is-expanded {
          flex-grow: 1;
        }
      }
      &.has-addons-centered {
        justify-content: center;
      }
      &.has-addons-right {
        justify-content: flex-end;
      }
      &.has-addons-fullwidth {
        .${/* sc-custom '.control' */Control.name} {
          flex-grow: 1;
          flex-shrink: 0;
        }
      }
    }
    &.is-grouped {
      display: flex;
      justify-content: flex-start;
      & > .${/* sc-custom '.control' */Control.name} {
        flex-shrink: 0;
        &:not(:last-child) {
          margin-bottom: 0;
          margin-right: 0.75rem;
        }
        &.is-expanded {
          flex-grow: 1;
          flex-shrink: 1;
        }
      }
      &.is-grouped-centered {
        justify-content: center;
      }
      &.is-grouped-right {
        justify-content: flex-end;
      }
      &.is-grouped-multiline {
        flex-wrap: wrap;
        & > .${/* sc-custom '.control' */Control.name} {
          &:last-child,
          &:not(:last-child) {
            margin-bottom: 0.75rem;
          }
        }
        &:last-child {
          margin-bottom: -0.75rem;
        }
        &:not(:last-child) {
          margin-bottom: 0;
        }
      }
    }

    &.is-horizontal {
      ${tablet(theme)`
        display: flex;
      `}
    }
  `
}

export class FieldLabel extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    .${/* sc-custom '.label' */Label.name} {
      font-size: inherit;
    }
    ${mobile(theme)`
      margin-bottom: 0.5rem;
    `}
    ${tablet(theme)`
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 0;
      margin-right: 1.5rem;
      text-align: right;
      &.is-small {
        font-size: ${theme['size-small']};
        padding-top: 0.375em;
      }
      &.is-normal {
        padding-top: 0.375em;
      }
      &.is-medium {
        font-size: ${theme['size-medium']};
        padding-top: 0.375em;
      }
      &.is-large {
        font-size: ${theme['size-large']};
        padding-top: 0.375em;
      }
    `}
  `
}

export class FieldBody extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    .${/* sc-custom '.field' */Field.name} .${/* sc-custom '.field' */Field.name} {
      margin-bottom: 0;
    }
    ${tablet(theme)`
      display: flex;
      flex-basis: 0;
      flex-grow: 5;
      flex-shrink: 1;
      .${/* sc-custom '.field' */Field.name} {
        margin-bottom: 0;
      }
      & > .${/* sc-custom '.field' */Field.name} {
        flex-shrink: 1;
        &:not(.is-narrow) {
          flex-grow: 1;
        }
        &:not(:last-child) {
          margin-right: 0.75rem;
        }
      }
    `}
  `
}

Field.Label = FieldLabel
Field.Body = FieldBody
