/* stylelint-disable no-descending-specificity */
import React from 'react'
import { css as emotion_css } from 'emotion'

const ButtonsStyle = emotion_css`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  &:last-child {
    margin-bottom: -0.5rem;
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  &.is-centered {
    justify-content: center;
  }
  &.is-right {
    justify-content: flex-end;
  }
`

export default class Buttons extends React.PureComponent {
  static defaultProps = {
    as: 'div',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return React.createElement(as, {
      ...props,
      className: [
        Buttons.name,
        ButtonsStyle,
        className,
      ].join(' '),
    })
  }
}
