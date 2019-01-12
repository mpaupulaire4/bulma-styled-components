/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import { block } from '../utilities/mixins'

BULMA_VARS({
  get 'progress-bar-background-color'() { return this['border'] },
  get 'progress-value-background-color'() { return this['text'] },
})

const colorClasses = theme => Object.entries(theme.colors).reduce((acc, [name, [color]]) => css`
  ${acc}
  &.is-${name} {
    &::-webkit-progress-value {
      background-color: ${color};
    }
    &::-moz-progress-bar {
      background-color: ${color}
    }
    &::-ms-fill {
      background-color: ${color}
    }
  }
`, '')

export default class Progress extends BaseWithConsumer {
  static displayName ='Progress'
  static defaultProps = {
    as: 'progress',
  }

  static Style = theme => css`
    ${block}
    appearance: none;
    border: none;
    border-radius: ${theme['radius-rounded']};
    display: block;
    height: ${theme['size-normal']};
    overflow: hidden;
    padding: 0;
    width: 100%;
    &::-webkit-progress-bar {
      background-color: ${theme['progress-bar-background-color']};
    }
    &::-webkit-progress-value {
      background-color: ${theme['progress-value-background-color']};
    }
    &::-moz-progress-bar {
      background-color: ${theme['progress-value-background-color']};
    }
    &::-ms-fill {
      background-color: ${theme['progress-value-background-color']};
      border: none;
    }
    /* Colors */
    ${colorClasses(theme)}
    /* Sizes */
    &.is-small {
      height: ${theme['size-small']};
    }
    &.is-medium {
      height: ${theme['size-medium']};
    }
    &.is-large {
      height: ${theme['size-large']};
    }
  `
}
