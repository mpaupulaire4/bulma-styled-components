import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import {
  block,
  placeholder
} from '../utilities/mixins'
import {
  control,
} from '../utilities/controls'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'input-color': vars['grey-darker'],
  'input-background-color': vars['white'],
  'input-border-color': vars['grey-lighter'],
  'input-shadow': `inset 0 1px 2px ${rgba(vars['black'], 0.1)}`,

  'input-hover-color': vars['grey-darker'],
  'input-hover-border-color': vars['grey-light'],

  'input-focus-color': vars['grey-darker'],
  'input-focus-border-color': vars['link'],
  'input-focus-box-shadow-size': '0 0 0 0.125em',
  'input-focus-box-shadow-color': rgba(vars['link'], 0.25),

  'input-disabled-color': vars['text-light'],
  'input-disabled-background-color': vars['background'],
  'input-disabled-border-color': vars['background'],

  'input-arrow': vars['link'],

  'input-icon-color': vars['grey-lighter'],
  'input-icon-active-color': vars['grey'],

  'input-radius': vars['radius'],

  'file-border-color': vars['border'],
  'file-radius': vars['radius'],

  'file-cta-background-color': vars['white-ter'],
  'file-cta-color': vars['grey-dark'],
  'file-cta-hover-color': vars['grey-darker'],
  'file-cta-active-color': vars['grey-darker'],

  'file-name-border-color': vars['border'],
  'file-name-border-style': 'solid',
  'file-name-border-width': '1px 1px 1px 0',
  'file-name-max-width': '16em',

  'label-color': vars['grey-darker'],
  'label-weight': vars['weight-bold'],

  'help-size': vars['size-small'],
}))
const FileColorClasses = ({ theme }) => Object.entries(theme['colors']).reduce((acc, [name, [color,]]) => css`
  ${acc}
  &.is-${name} {
    .file-cta {
      background-color: ${color};
      border-color: transparent;
      color: ${color_invert};
    }
    &:hover,
    &.is-hovered {
      .file-cta {
        background-color: ${darken(0.025, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
    &:focus,
    &.is-focused {
      .file-cta {
        border-color: transparent;
        box-shadow: 0 0 0.5em ${rgba(color, 0.25)};
        color: ${color_invert};
      }
    }
    &:active,
    &.is-active {
      .file-cta {
        background-color: ${darken(0.05, color)};
        border-color: transparent;
        color: ${color_invert};
      }
    }
  }
`,'')
export const File = styled.div`
  ${unselectable}
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
  /* Colors */
  ${FileColorClasses}
  /* Sizes */
  &.is-small {
    font-size: ${fromTheme('size-small')};
  }
  &.is-medium {
    font-size: ${fromTheme('size-medium')};
    .file-icon {
      .fa {
        font-size: 21px;
      }
    }
  }
  &.is-large {
    font-size: ${fromTheme('size-large')};
    .file-icon {
      .fa {
        font-size: 28px;
      }
    }
  }
  /* Modifiers */
  &.has-name {
    .file-cta {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    .file-name {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }
    &.is-empty {
      .file-cta {
        border-radius: ${fromTheme('file-radius')};
      }
      .file-name {
        display: none;
      }
    }
  }
  &.is-boxed {
    .file-label {
      flex-direction: column;
    }
    .file-cta {
      flex-direction: column;
      height: auto;
      padding: 1em 3em;
    }
    .file-name {
      border-width: 0 1px 1px;
    }
    .file-icon {
      height: 1.5em;
      width: 1.5em;
      .fa {
        font-size: 21px;
      }
    }
    &.is-small {
      .file-icon .fa {
        font-size: 14px;
      }
    }
    &.is-medium {
      .file-icon .fa {
        font-size: 28px;
      }
    }
    &.is-large {
      .file-icon .fa {
        font-size: 35px;
      }
    }
    &.has-name {
      .file-cta {
        border-radius: ${fromTheme('file-radius')} ${fromTheme('file-radius')} 0 0;
      }
      .file-name {
        border-radius: 0 0 ${fromTheme('file-radius')} ${fromTheme('file-radius')};
        border-width: 0 1px 1px;
      }
    }
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-fullwidth {
    .file-label {
      width: 100%;
    }
    .file-name {
      flex-grow: 1;
      max-width: none;
    }
  }
  &.is-right {
    justify-content: flex-end;
    .file-cta {
      border-radius: 0 ${fromTheme('file-radius')} ${fromTheme('file-radius')} 0;
    }
    .file-name {
      border-radius: ${fromTheme('file-radius')} 0 0 ${fromTheme('file-radius')};
      border-width: 1px 0 1px 1px;
      order: -1;
    }
  }
`

export const FileLabel = styled.label`
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
  &:hover {
    .file-cta {
      background-color: darken($file-cta-background-color, 2.5%);
      color: $file-cta-hover-color;
    }
    .file-name {
      border-color: darken($file-name-border-color, 2.5%);
    }
  }
  &:active {
    .file-cta {
      background-color: darken($file-cta-background-color, 5%);
      color: $file-cta-active-color;
    }
    .file-name {
      border-color: darken($file-name-border-color, 5%);
    }
  }
`
export const FileInput = styled.input.attrs({
  type: 'file'
})`
  height: 0.01em;
  left: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 0.01em;
`

.file-cta,
.file-name
  +control
  border-color: $file-border-color;
  border-radius: $file-radius;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;

.file-cta
  background-color: $file-cta-background-color;
  color: $file-cta-color;

.file-name
  border-color: $file-name-border-color;
  border-style: $file-name-border-style;
  border-width: $file-name-border-width;
  display: block;
  max-width: $file-name-max-width;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;

.file-icon
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
  .fa
    font-size: 14px;

.label
  color: $label-color;
  display: block;
  font-size: $size-normal;
  font-weight: $label-weight;
  &:not(:last-child)
    margin-bottom: 0.5em;
  /* Sizes */
  &.is-small
    font-size: $size-small;
  &.is-medium
    font-size: $size-medium;
  &.is-large
    font-size: $size-large;

.help
  display: block;
  font-size: $help-size;
  margin-top: 0.25rem;
  @each $name, $pair in $colors
    $color: nth($pair, 1);
    &.is-#{$name}
      color: $color;

/* Containers */

.field
  &:not(:last-child)
    margin-bottom: 0.75rem;
  /* Modifiers */
  &.has-addons
    display: flex;
    justify-content: flex-start;
    .control
      &:not(:last-child)
        margin-right: -1px;
      &:not(:first-child):not(:last-child)
        .button,
        .input,
        .select select
          border-radius: 0;
      &:first-child
        .button,
        .input,
        .select select
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
      &:last-child
        .button,
        .input,
        .select select
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
      .button,
      .input,
      .select select
        &:hover,
        &.is-hovered
          z-index: 2;
        &:focus,
        &.is-focused,
        &:active,
        &.is-active
          z-index: 3;
          &:hover
            z-index: 4;
      &.is-expanded
        flex-grow: 1;
    &.has-addons-centered
      justify-content: center;
    &.has-addons-right
      justify-content: flex-end;
    &.has-addons-fullwidth
      .control
        flex-grow: 1;
        flex-shrink: 0;
  &.is-grouped
    display: flex;
    justify-content: flex-start;
    & > .control
      flex-shrink: 0;
      &:not(:last-child)
        margin-bottom: 0;
        margin-right: 0.75rem;
      &.is-expanded
        flex-grow: 1;
        flex-shrink: 1;
    &.is-grouped-centered
      justify-content: center;
    &.is-grouped-right
      justify-content: flex-end;
    &.is-grouped-multiline
      flex-wrap: wrap;
      & > .control
        &:last-child,
        &:not(:last-child)
          margin-bottom: 0.75rem;
      &:last-child
        margin-bottom: -0.75rem;
      &:not(:last-child)
        margin-bottom: 0;

  &.is-horizontal
    +tablet
      display: flex;

.field-label
  .label
    font-size: inherit;
  +mobile
    margin-bottom: 0.5rem;
  +tablet
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
    &.is-small
      font-size: $size-small;
      padding-top: 0.375em;
    &.is-normal
      padding-top: 0.375em;
    &.is-medium
      font-size: $size-medium;
      padding-top: 0.375em;
    &.is-large
      font-size: $size-large;
      padding-top: 0.375em;

.field-body
  .field .field
    margin-bottom: 0;
  +tablet
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
    .field
      margin-bottom: 0;
    & > .field
      flex-shrink: 1;
      &:not(.is-narrow)
        flex-grow: 1;
      &:not(:last-child)
        margin-right: 0.75rem;

.control
  clear: both //fixes the icon floating out of the input when help text is floated right;
  font-size: $size-normal;
  position: relative;
  text-align: left;
  /* Modifiers */
  /* DEPRECATED */
  &.has-icon
    .icon
      color: $input-icon-color;
      height: 2.25em;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 2.25em;
      z-index: 4;
    .input
      &:focus
        & + .icon
          color: $input-icon-active-color;
      &.is-small
        & + .icon
          font-size: $size-small;
      &.is-medium
        & + .icon
          font-size: $size-medium;
      &.is-large
        & + .icon
          font-size: $size-large;
    &:not(.has-icon-right)
      .icon
        left: 0;
      .input
        padding-left: 2.25em;
    &.has-icon-right
      .icon
        right: 0;
      .input
        padding-right: 2.25em;
  &.has-icons-left,
  &.has-icons-right
    .input,
    .select
      &:focus
        & ~ .icon
          color: $input-icon-active-color;
      &.is-small ~ .icon
        font-size: $size-small;
      &.is-medium ~ .icon
        font-size: $size-medium;
      &.is-large ~ .icon
        font-size: $size-large;
    .icon
      color: $input-icon-color;
      height: 2.25em;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 2.25em;
      z-index: 4;
  &.has-icons-left
    .input,
    .select select
      padding-left: 2.25em;
    .icon.is-left
      left: 0;
  &.has-icons-right
    .input,
    .select select
      padding-right: 2.25em;
    .icon.is-right
      right: 0;
  &.is-loading
    &::after
      +loader
      position: absolute !important;
      right: 0.625em;
      top: 0.625em;
      z-index: 4;
    &.is-small:after
      font-size: $size-small;
    &.is-medium:after
      font-size: $size-medium;
    &.is-large:after
      font-size: $size-large;
