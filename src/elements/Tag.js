/* stylelint-disable no-descending-specificity */
import { css as emotion_css } from 'emotion'
import { darken } from 'polished'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'
import Delete from './Delete'
import Icon from './Icon'
import Tags from './Tags'


Vars.addDerivedDefault(vars => ({
  'tag-background-color': vars['background'],
  'tag-color': vars['text'],
  'tag-radius': vars['radius'],
  'tag-delete-margin': '1px',
}))

const colorClasses = theme => Object.entries(theme.colors).reduce((acc, [name, [color, color_invert]]) => emotion_css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
  }
`, '')

export default class Tag extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = (theme, { as }) => emotion_css`
    align-items: center;
    background-color: ${theme['tag-background-color']};
    border-radius: ${theme['tag-radius']};
    color: ${theme['tag-color']};
    display: inline-flex;
    font-size: ${theme['size-small']};
    height: 2em;
    justify-content: center;
    line-height: 1.5;
    padding-left: 0.75em;
    padding-right: 0.75em;
    white-space: nowrap;
    .${Delete.name} { /* stylelint-disable-line */
      margin-left: 0.25rem;
      margin-right: -0.375rem;
    }

    /* Colors */
    ${colorClasses(theme)}

    /* Sizes */
    &.is-medium {
      font-size: ${theme['size-normal']};
    }
    &.is-large {
      font-size: ${theme['size-medium']};
    }
    .${Icon.name} { /* stylelint-disable-line */
      &:first-child:not(:last-child) {
        margin-left: -0.375em;
        margin-right: 0.1875em;
      }
      &:last-child:not(:first-child) {
        margin-left: 0.1875em;
        margin-right: -0.375em;
      }
      &:first-child:last-child {
        margin-left: -0.375em;
        margin-right: -0.375em;
      }
    }
    /* Modifiers */
    &.is-delete {
      margin-left: ${theme['tag-delete-margin']};
      padding: 0;
      position: relative;
      width: 2em;
      &::before,
      &::after {
        background-color: currentColor;
        content: "";
        display: block;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%) rotate(45deg);
        transform-origin: center center;
      }
      &::before {
        height: 1px;
        width: 50%;
      }
      &::after {
        height: 50%;
        width: 1px;
      }
      &:hover,
      &:focus {
        background-color: ${darken(0.05, theme['tag-background-color'])};
      }
      &:active {
        background-color: ${darken(0.1, theme['tag-background-color'])};
      }
    }
    &.is-rounded {
      border-radius: ${theme['radius-rounded']};
    }

    ${as === 'a' ? emotion_css`
      &:hover {
        text-decoration: underline;
      }
      ` : ''}
    .${/* sc-selector */Tags.name} & {
      margin-bottom: 0.5rem;
      &:not(:last-child) {
        margin-right: 0.5rem;
      }
    }
    .${Tags.name}.has-addons & {
      margin-right: 0;
      &:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }
      &:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }
    }
    .${Tags.name}.is-centered &{
      margin-right: 0.25rem;
      margin-left: 0.25rem;
    }
    .${Tags.name}.is-right & {
      &:not(:first-child) {
        margin-left: 0.5rem;
      }
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  `
}
