/* stylelint-disable no-descending-specificity */
import styled from 'styled-components'
import {
  Input,
  Select,
  Icon,
} from '../'
import Vars from '../utilities/vars'
import { loader } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'input-icon-color': vars['grey-lighter'],
  'input-icon-active-color': vars['grey'],
}))

export const Control = styled.div`
  clear: both; /* fixes the icon floating out of the input when help text is floated right */
  font-size: ${fromTheme('size-normal')};
  position: relative;
  text-align: left;
  /* Modifiers */
  &.has-icons-left,
  &.has-icons-right {
    ${/* sc-custom '.input' */Input},
    ${/* sc-custom '.select' */Select} {
      &:focus {
        & ~ ${/* sc-custom '.icon' */Icon} {
          color: ${fromTheme('input-icon-active-color')};
        }
      }
      &.is-small ~ ${/* sc-custom '.icon' */Icon} {
        font-size: ${fromTheme('size-small')};
      }
      &.is-medium ~ ${/* sc-custom '.icon' */Icon} {
        font-size: ${fromTheme('size-medium')};
      }
      &.is-large ~ ${/* sc-custom '.icon' */Icon} {
        font-size: ${fromTheme('size-large')};
      }
    }
    ${/* sc-custom '.icon' */Icon} {
      color: ${fromTheme('input-icon-color')};
      height: 2.25em;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 2.25em;
      z-index: 4;
    }
  }
  &.has-icons-left {
    ${/* sc-custom '.input' */Input},
    ${/* sc-custom '.select' */Select} select {
      padding-left: 2.25em;
    }
    ${/* sc-custom '.icon' */Icon}.is-left {
      left: 0;
    }
  }
  &.has-icons-right {
    ${/* sc-custom '.input' */Input},
    ${/* sc-custom '.select' */Select} select {
      padding-right: 2.25em;
    }
    ${/* sc-custom '.icon' */Icon}.is-right {
      right: 0;
    }
  }
  &.is-loading {
    &::after {
      ${loader}
      position: absolute !important;
      right: 0.625em;
      top: 0.625em;
      z-index: 4;
    }
    &.is-small:after {
      font-size: ${fromTheme('size-small')};
    }
    &.is-medium:after {
      font-size: ${fromTheme('size-medium')};
    }
    &.is-large:after {
      font-size: ${fromTheme('size-large')};
    }
  }
`
Control.defaultProps = { theme: Vars.getVariables() }
