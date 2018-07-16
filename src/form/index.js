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

  'label-color': vars['grey-darker'],
  'label-weight': vars['weight-bold'],

  'help-size': vars['size-small'],
}))

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
