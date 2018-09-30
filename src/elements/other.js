/* eslint-disable react/no-multi-comp */
import { css } from 'emotion'
import { block, loader } from '../utilities/mixins'
import { Base, BaseWithConsumer } from '../base/Class'

export class Block extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`${block}`
}

export class Heading extends Base {
  static defaultProps = {
    as: 'h6',
  }

  static Style = () => css`
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase;
  `
}

export class Highlight extends BaseWithConsumer {
  static defaultProps = {
    as: 'strong',
  }

  static Style = theme => css`
    ${block}
    font-weight: ${theme['weight-normal']};
    max-width: 100%;
    overflow: hidden;
    padding: 0;
    pre {
      overflow: auto;
      max-width: 100%;
    }
  `
}

export class Loader extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`${loader}`
}

export class Num extends BaseWithConsumer {
  static defaultProps = {
    as: 'span',
  }

  static Style = theme => css`
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
  `
}
