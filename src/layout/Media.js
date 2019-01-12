import { css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer, Base } from '../base/Class'
import Content from '../elements/Content'
import Control from '../form/Control'

export default class Media extends BaseWithConsumer {
  static displayName ='Media'
  static defaultProps = {
    as: 'article',
  }

  static Style = theme => css`
    align-items: flex-start;
    display: flex;
    text-align: left;
    .${Content.name}:not(:last-child) {
      margin-bottom: 0.75rem;
    }
    & + .${/* sc-custom ".media" */Media.name} {
      border-top: 1px solid ${rgba(theme['border'], 0.5)};
      margin-top: 1rem;
      padding-top: 1rem;
    }
    .${/* sc-custom ".media" */Media.name} {
      border-top: 1px solid ${rgba(theme['border'], 0.5)};
      display: flex;
      padding-top: 0.75rem;
      .${/* sc-custom ".content" */Content.name}:not(:last-child),
      .${/* sc-custom ".constrol" */Control.name}:not(:last-child) {
        margin-bottom: 0.5rem;
      }
      .${/* sc-custom ".media" */Media.name} {
        padding-top: 0.5rem;
      }
      .${/* sc-custom ".media" */Media.name} + .${/* sc-custom ".media" */Media.name} {
        margin-top: 0.5rem;
      }
    }

    /* Sizes */
    &.is-large {
      & + .${/* sc-custom ".media" */Media.name} { /* stylelint-disable-line no-descending-specificity */
        margin-top: 1.5rem;
        padding-top: 1.5rem;
      }
    }
  `
}

const mediaShared = `
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
`

export class MediaLeft extends Base {
  static displayName ='MediaLeft'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    ${mediaShared}
    margin-right: 1rem;
  `
}
export class MediaRight extends Base {
  static displayName ='MediaRight'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    ${mediaShared}
    margin-left: 1rem;
  `
}
export class MediaContent extends Base {
  static displayName ='MediaContent'
  static defaultProps = {
    as: 'div',
  }

  static Style = () => css`
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
  `
}

Media.Left = MediaLeft
Media.Right = MediaRight
Media.Content = MediaContent
