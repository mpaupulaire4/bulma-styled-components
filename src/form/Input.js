import { css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import { placeholder } from '../utilities/mixins'
import {
  control,
  control_small,
  control_medium,
  control_large,
} from '../utilities/controls'

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
})

export const InputSelectShared = theme => css`
  ${control(theme)}
  background-color: ${theme['input-background-color']};
  border-color: ${theme['input-border-color']};
  color: ${theme['input-color']};
  ${placeholder`
    color: ${rgba(theme['input-color'], 0.3)};
  `}
  &:hover,
  &.is-hovered {
    border-color: ${theme['input-hover-border-color']};
  }
  &:focus,
  &.is-focused,
  &:active,
  &.is-active {
    border-color: ${theme['input-focus-border-color']};
    box-shadow: ${theme['input-focus-box-shadow-size']} ${theme['input-focus-box-shadow-color']};
  }
  &[disabled] {
    background-color: ${theme['input-disabled-background-color']};
    border-color: ${theme['input-disabled-border-color']};
    box-shadow: none;
    color: ${theme['input-disabled-color']};
    ${placeholder`
      color: ${rgba(theme['input-disabled-color'], 0.3)};
    `}
  }
`
const ITSharedColorClasses = theme => Object.entries(theme['colors']).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${/* sc-custom 'blue' */name} {
    border-color: ${color};
    &:focus,
    &.is-focused,
    &:active,
    &.is-active {
      box-shadow: ${theme['input-focus-box-shadow-size']} ${rgba(color, 0.25)};
    }
  }
`, '')
export const InputTextareaShared = theme => css`
  ${InputSelectShared(theme)}
  box-shadow: ${theme['input-shadow']};
  max-width: 100%;
  width: 100%;
  &[readOnly] {
    box-shadow: none;
  }
  /* Colors */
  ${ITSharedColorClasses(theme)}
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
  &.is-fullwidth {
    display: block;
    width: 100%;
  }
  &.is-inline {
    display: inline;
    width: auto;
  }
`

export default class Input extends BaseWithConsumer {
  static displayName ='Input'
  static defaultProps = {
    as: 'input',
  }

  static Style = theme => css`
    ${InputTextareaShared(theme)}
    &.is-rounded {
      border-radius: ${theme['radius-rounded']};
      padding-left: 1em;
      padding-right: 1em;
    }
    &.is-static {
      background-color: transparent;
      border-color: transparent;
      box-shadow: none;
      padding-left: 0;
      padding-right: 0;
    }
  `
}
