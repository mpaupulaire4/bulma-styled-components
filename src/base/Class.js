/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Consumer } from './'

export class BaseWithConsumer extends React.PureComponent {
  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {({ theme }) => React.createElement(as, {
          ...props,
          className: [
            this.constructor.name,
            this.constructor.Style(theme, this.props),
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}

export class Base extends React.PureComponent {
  render() {
    const { as, className, ...props } = this.props
    return React.createElement(as, {
      ...props,
      className: [
        this.constructor.name,
        this.constructor.Style(this.props),
        className,
      ].join(' '),
    })
  }
}
