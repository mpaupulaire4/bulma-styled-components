/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import Vars from '../utilities/vars'
import { Label } from './Label'
import { Select } from './Select'
import { Input } from './Input'
import { Control } from './Control'
import Button from '../elements/Button'
import {
  tablet,
  mobile,
} from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

const defaultProps = { theme: Vars.getVariables() }

export const Field = styled.div`
  &:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  /* Modifiers */
  &.has-addons {
    display: flex;
    justify-content: flex-start;
    ${/* sc-custom '.control' */Control} {
      &:not(:last-child) {
        margin-right: -1px;
      }
      &:not(:first-child):not(:last-child) {
        ${/* sc-custom '.button' */Button},
        ${/* sc-custom '.input' */Input},
        ${/* sc-custom '.select' */Select} select {
          border-radius: 0;
        }
      }
      &:first-child {
        ${/* sc-custom '.button' */Button},
        ${/* sc-custom '.input' */Input},
        ${/* sc-custom '.select' */Select} select {
          border-bottom-right-radius: 0;
          border-top-right-radius: 0;
        }
      }
      &:last-child {
        ${/* sc-custom '.button' */Button},
        ${/* sc-custom '.input' */Input},
        ${/* sc-custom '.select' */Select} select {
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
        }
      }
      ${/* sc-custom '.button' */Button},
      ${/* sc-custom '.input' */Input},
      ${/* sc-custom '.select' */Select} select {
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
      ${/* sc-custom '.control' */Control} {
        flex-grow: 1;
        flex-shrink: 0;
      }
    }
  }
  &.is-grouped {
    display: flex;
    justify-content: flex-start;
    & > ${/* sc-custom '.control' */Control} {
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
      & > ${/* sc-custom '.control' */Control} {
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
    ${tablet`
      display: flex;
    `}
  }
`
Field.defaultProps = defaultProps

export const FieldLabel = styled.div`
  ${/* sc-custom '.label' */Label} {
    font-size: inherit;
  }
  ${mobile`
    margin-bottom: 0.5rem;
  `}
  ${tablet`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
    &.is-small {
      font-size: ${fromTheme('size-small')};
      padding-top: 0.375em;
    }
    &.is-normal {
      padding-top: 0.375em;
    }
    &.is-medium {
      font-size: ${fromTheme('size-medium')};
      padding-top: 0.375em;
    }
    &.is-large {
      font-size: ${fromTheme('size-large')};
      padding-top: 0.375em;
    }
  `}
`
FieldLabel.defaultProps = defaultProps

export const FieldBody = styled.div`
  ${/* sc-custom '.field' */Field} ${/* sc-custom '.field' */Field} {
    margin-bottom: 0;
  }
  ${tablet`
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
    ${/* sc-custom '.field' */Field} {
      margin-bottom: 0;
    }
    & > ${/* sc-custom '.field' */Field} {
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
FieldBody.defaultProps = defaultProps

Field.Label = FieldLabel
Field.Body = FieldBody
