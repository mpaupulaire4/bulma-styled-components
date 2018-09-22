/* eslint-disable react/no-multi-comp */
import React from 'react'
import { css } from 'styled-components'
import { block, loader } from '../utilities/mixins'
import { Consumer } from '../base'

export class Block extends React.PureComponent {
  static defaultProps = {
    as: 'div',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return React.createElement(as, {
      ...props,
      className: [
        Block.name,
        css`${block}`,
        className,
      ].join(' '),
    })
  }
}

export class Heading extends React.PureComponent {
  static defaultProps = {
    as: 'h6',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return React.createElement(as, {
      ...props,
      className: [
        Heading.name,
        css`
          display: block;
          font-size: 11px;
          letter-spacing: 1px;
          margin-bottom: 5px;
          text-transform: uppercase;
        `,
        className,
      ].join(' '),
    })
  }
}

export class Highlight extends React.PureComponent {
  static defaultProps = {
    as: 'strong',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {({ theme }) => React.createElement(as, {
          ...props,
          className: [
            Highlight.name,
            css`
              ${block}
              font-weight: ${theme['weight-normal']};
              max-width: 100%;
              overflow: hidden;
              padding: 0;
              pre {
                overflow: auto;
                max-width: 100%;
              }
            `,
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}

export class Loader extends React.PureComponent {
  static defaultProps = {
    as: 'div',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return React.createElement(as, {
      ...props,
      className: [
        Loader.name,
        css`${loader}`,
        className,
      ].join(' '),
    })
  }
}

export class Num extends React.PureComponent {
  static defaultProps = {
    as: 'span',
    className: '',
  }

  render() {
    const { as, className, ...props } = this.props
    return (
      <Consumer>
        {({ theme }) => React.createElement(as, {
          ...props,
          className: [
            Num.name,
            css`
              align-items: center;
              background-color: ${theme['background']};
              border-radius: ${theme['radius-rounded']};
              display: inline-flex;
              font-size: ${theme['size-medium']};
              height: 2em;
              justify-content: center;
              margin-right: 1.5rem;
              min-width: 2.5em;
              padding: 0.25rem 0.5rem;
              text-align: center;
              vertical-align: top;
            `,
            className,
          ].join(' '),
        })}
      </Consumer>
    )
  }
}
