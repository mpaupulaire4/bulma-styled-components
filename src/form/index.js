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
