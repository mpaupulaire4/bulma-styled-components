
export const control = theme => `
  appearance: none;
  align-items: center;
  border: ${theme['control-border-width']} solid transparent;
  border-radius: ${theme['control-radius']};
  box-shadow: none;
  display: inline-flex;
  font-size: ${theme['size-normal']};
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: ${theme['control-padding-vertical']};
  padding-left: ${theme['control-padding-horizontal']};
  padding-right: ${theme['control-padding-horizontal']};
  padding-top: ${theme['control-padding-vertical']};
  position: relative;
  vertical-align: top;

  /* States */

  &:focus,
  &.is-focused,
  &:active,
  &.is-active {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
  }
`

// The controls sizes use mixins so they can be used at different breakpoints
export const control_small = theme => `
  border-radius: ${theme['control-radius-small']};
  font-size: ${theme['size-small']};
`
export const control_medium = theme => `
  font-size: ${theme['size-medium']};
`
export const control_large = theme => `
  font-size: ${theme['size-large']};
`
