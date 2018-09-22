import React from 'react'
import { css as emotion_css } from 'emotion'
import { Consumer } from '../'
import Button from './Button'
import Vars from '../utilities/vars'

Vars.addDerivedDefault(() => ({
  'icon-dimensions': '1.5rem',
  'icon-dimensions-small': '1rem',
  'icon-dimensions-medium': '2rem',
  'icon-dimensions-large': '3rem',
}))

export const IconStyle = theme => emotion_css`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: ${theme['icon-dimensions']};
  width: ${theme['icon-dimensions']};
  /* Sizes */
  &.is-small {
    height: ${theme['icon-dimensions-small']};
    width: ${theme['icon-dimensions-small']};
  }
  &.is-medium {
    height: ${theme['icon-dimensions-medium']};
    width: ${theme['icon-dimensions-medium']};
  }
  &.is-large {
    height: ${theme['icon-dimensions-large']};
    width: ${theme['icon-dimensions-large']};
  }
  .${Button.ClassName} & { /* stylelint-disable-line */
    &,
    &.is-small,
    &.is-medium,
    &.is-large {
      height: 1.5em;
      width: 1.5em;
    }
    &:first-child:not(:last-child) {
      margin-left: calc(-0.375em - ${theme['button-border-width']});
      margin-right: 0.1875em;
    }
    &:last-child:not(:first-child) {
      margin-left: 0.1875em;
      margin-right: calc(-0.375em - ${theme['button-border-width']});
    }
    &:first-child:last-child {
      margin-left: calc(-0.375em - ${theme['button-border-width']});
      margin-right: calc(-0.375em - ${theme['button-border-width']});
    }
  }
`

export default class Icon extends React.PureComponent {
  static ClassName = 'ICON'
  static defaultProps = {
    as: 'span',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {theme => React.createElement(as, {
          ...props,
          className: [
            Icon.ClassName,
            IconStyle(theme, as),
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}

