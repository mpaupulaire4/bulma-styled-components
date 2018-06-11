import { css } from 'styled-components'
import { fromTheme } from './functions'

const classes = {
  'is-focued': 'outline: none;',
  'is-active': 'outline: none;',
}

export const control = (bulma_classes = []) => {
  const extra = bulma_classes.reduce((acc, clas) => css`${acc} ${classes[clas]}`, '')
  return css`
    appearance: none;
    align-items: center;
    border: ${fromTheme('control-border-width')} solid transparent;
    border-radius: ${fromTheme('control-radius')};
    box-shadow: none;
    display: inline-flex;
    font-size: ${fromTheme('size-normal')};
    height: 2.25em;
    justify-content: flex-start;
    line-height: 1.5;
    padding-bottom: ${fromTheme('control-padding-vertical')};
    padding-left: ${fromTheme('control-padding-horizontal')};
    padding-right: ${fromTheme('control-padding-horizontal')};
    padding-top: ${fromTheme('control-padding-vertical')};
    position: relative;
    vertical-align: top;

    /* States */

    &:focus,
    &:active,{
      outline: none;
    }
    &[disabled] {
      cursor: not-allowed;
    }
    ${extra}
  `
}

// The controls sizes use mixins so they can be used at different breakpoints
export const control_small = css`
  border-radius: ${fromTheme('control-radius-small')};
  font-size: ${fromTheme('size-small')};
`
export const control_medium = css`
  font-size: ${fromTheme('size-medium')};
`
export const control_large = css`
  font-size: ${fromTheme('size-large')};
`
