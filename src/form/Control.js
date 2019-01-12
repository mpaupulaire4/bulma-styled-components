/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import Icon from '../elements/Icon'
import Select from './Select'
import Input from './Input'
import { loader } from '../utilities/mixins'
import { BaseWithConsumer } from '../base/Class'

BULMA_VARS({
  get 'input-icon-color'() { return this['grey-lighter'] },
  get 'input-icon-active-color'() { return this['grey'] },
})

export default class Control extends BaseWithConsumer {
  static displayName ='Control'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    clear: both; /* fixes the icon floating out of the input when help text is floated right */
    font-size: ${theme['size-normal']};
    position: relative;
    text-align: left;
    /* Modifiers */
    &.has-icons-left,
    &.has-icons-right {
      .${/* sc-custom '.icon' */Icon.name} {
        color: ${theme['input-icon-color']};
        height: 2.25em;
        pointer-events: none;
        position: absolute;
        top: 0;
        width: 2.25em;
        z-index: 4;
      }
      .${/* sc-custom '.input' */Input.name}:focus ~ .${/* sc-custom '.icon' */Icon.name},
      .${/* sc-custom '.select' */Select.name}:focus ~ .${/* sc-custom '.icon' */Icon.name} {
        color: ${theme['input-icon-active-color']};
      }
      .${/* sc-custom '.input' */Input.name}:focus.is-mall ~ .${/* sc-custom '.icon' */Icon.name},
      .${/* sc-custom '.select' */Select.name}:focus.is-small ~ ${/* sc-custom '.icon' */Icon.name} {
        font-size: ${theme['size-small']};
      }
      .${/* sc-custom '.input' */Input.name}:focus.is-medium ~ .${/* sc-custom '.icon' */Icon.name},
      .${/* sc-custom '.select' */Select.name}:focus.is-smedium ~ .${/* sc-custom '.icon' */Icon.name} {
        font-size: ${theme['size-medium']};
      }
      .${/* sc-custom '.input' */Input.name}:focus.is-large ~ .${/* sc-custom '.icon' */Icon.name},
      .${/* sc-custom '.select' */Select.name}:focus.is-large ~ .${/* sc-custom '.icon' */Icon.name} {
        font-size: ${theme['size-large']};
      }
    }
    &.has-icons-left {
      .${/* sc-custom '.input' */Input.name},
      .${/* sc-custom '.select' */Select.name} select {
        padding-left: 2.25em;
      }
      .${/* sc-custom '.icon' */Icon.name}.is-left {
        left: 0;
      }
    }
    &.has-icons-right {
      .${/* sc-custom '.input' */Input.name},
      .${/* sc-custom '.select' */Select.name} select {
        padding-right: 2.25em;
      }
      .${/* sc-custom '.icon' */Icon.name}.is-right {
        right: 0;
      }
    }
    &.is-loading {
      &::after {
        ${loader(theme)}
        position: absolute !important;
        right: 0.625em;
        top: 0.625em;
        z-index: 4;
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
