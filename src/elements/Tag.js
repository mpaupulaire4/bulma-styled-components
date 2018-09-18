/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { darken } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import { Delete, Icon, Tags } from './'


Vars.addDerivedDefault(vars => ({
  'tag-background-color': vars['background'],
  'tag-color': vars['text'],
  'tag-radius': vars['radius'],
  'tag-delete-margin': '1px',
}))

const colorClasses = props => Object.entries(props.theme.colors).reduce((acc, [name, [color, color_invert]]) => css`
  ${acc}
  &.is-${name} {
    background-color: ${color};
    color: ${color_invert};
  }
`, '')

const Tag = styled.span`
  align-items: center;
  background-color: ${fromTheme('tag-background-color')};
  border-radius: ${fromTheme('tag-radius')};
  color: ${fromTheme('tag-color')};
  display: inline-flex;
  font-size: ${fromTheme('size-small')};
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
  ${Delete} { /* stylelint-disable-line */
    margin-left: 0.25rem;
    margin-right: -0.375rem;
  }

  /* Colors */
  ${colorClasses}

  /* Sizes */
  &.is-medium {
    font-size: ${fromTheme('size-normal')};
  }
  &.is-large {
    font-size: ${fromTheme('size-medium')};
  }
  ${Icon} { /* stylelint-disable-line */
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
    margin-left: ${fromTheme('tag-delete-margin')};
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
      background-color: ${({ theme }) => darken(0.05, theme['tag-background-color'])};
    }
    &:active {
      background-color: ${({ theme }) => darken(0.1, theme['tag-background-color'])};
    }
  }
  &.is-rounded {
    border-radius: ${fromTheme('radius-rounded')};
  }

  a& {
    &:hover {
      text-decoration: underline;
    }
  }
  ${/* sc-selector */Tags} & {
    margin-bottom: 0.5rem;
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
  ${Tags}.has-addons & {
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
  ${Tags}.is-centered &{
    margin-right: 0.25rem;
    margin-left: 0.25rem;
  }
  ${Tags}.is-right & {
    &:not(:first-child) {
      margin-left: 0.5rem;
    }
    &:not(:last-child) {
      margin-right: 0;
    }
  }
`
Tag.defaultProps = { theme: Vars.getVariables() }
export default Tag
