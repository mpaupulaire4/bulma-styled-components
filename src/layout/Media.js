import { css as emotion_css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer, Base } from '../base/Class'
import Content from '../elements/Content'
import { Control } from '../form/Control'

export class Media extends BaseWithConsumer {
  static defaultProps = {
    as: 'article',
  }

  static Style = theme => emotion_css`
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
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    ${mediaShared}
    margin-right: 1rem;
  `
}
export class MediaRight extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    ${mediaShared}
    margin-left: 1rem;
  `
}
export class MediaContent extends Base {
  static defaultProps = {
    as: 'div',
  }

  static Style = () => emotion_css`
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: left;
  `
}

Media.Left = MediaLeft
Media.Right = MediaRight
Media.Content = MediaContent
