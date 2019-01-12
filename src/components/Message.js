/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { getLuminance, parseToHsl, lighten, desaturate, darken } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import { block } from '../utilities/mixins'
import Delete from '../elements/Delete'


BULMA_VARS({
  get 'message-background-color'() { return this['background'] },
  get 'message-radius'() { return this['radius'] },

  get 'message-header-background-color'() { return this['text'] },
  get 'message-header-color'() { return this['text-invert'] },
  get 'message-header-weight'() { return this['weight-bold'] },
  'message-header-padding': '0.75em 1em',
  get 'message-header-radius'() { return this['radius'] },

  get 'message-body-border-color'() { return this['border'] },
  'message-body-border-width': '0 0 0 4px',
  get 'message-body-color'() { return this['text'] },
  'message-body-padding': '1.25em 1.5em',
  get 'message-body-radius'() { return this['radius'] },

  get 'message-body-pre-background-color'() { return this['white'] },
  'message-body-pre-code-background-color': 'transparent',

  'message-header-body-border-width': 0,
})


export class MessageBody extends BaseWithConsumer {
  static displayName ='MessageBody'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    border-color: ${theme['message-body-border-color']};
    border-radius: ${theme['message-body-radius']};
    border-style: solid;
    border-width: ${theme['message-body-border-width']};
    color: ${theme['message-body-color']};
    padding: ${theme['message-body-padding']};
    code,
    pre {
      background-color: ${theme['message-body-pre-background-color']};
    }
    pre code {
      background-color: ${theme['message-body-pre-code-background-color']};
    }
  `
}


export class MessageHeader extends BaseWithConsumer {
  static displayName ='MessageHeader'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    align-items: center;
    background-color: ${theme['message-header-background-color']};
    border-radius: ${theme['message-header-radius']} ${theme['message-header-radius']} 0 0;
    color: ${theme['message-header-color']};
    display: flex;
    font-weight: ${theme['message-header-weight']};
    justify-content: space-between;
    line-height: 1.25;
    padding: ${theme['message-header-padding']};
    position: relative;
    .${Delete.name} { /* stylelint-disable-line */
      flex-grow: 0;
      flex-shrink: 0;
      margin-left: 0.75em;
    }
    & + .${/* sc-custom ".body" */MessageBody.name} {
      border-width: ${theme['message-header-body-border-width']};
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  `
}


const colorClasses = theme => Object.entries(theme.colors)
  .reduce((acc, [name, [color, color_invert]]) => {
    const { lightness } = parseToHsl(color)
    const color_lightning = Math.max((1 - lightness) - 0.02, 0)
    const color_luminance = getLuminance(color)
    const darken_percentage = color_luminance * 0.7
    const desaturate_percentage = color_luminance * 0.3
    return css`
      ${acc}
      &.is-${name} {
        background-color: ${lighten(color_lightning, color)};
        .${/* sc-custom ".header" */MessageHeader.name} {
          background-color: ${color};
          color: ${color_invert}
        }
        .${/* sc-custom ".body" */MessageBody.name} {
          border-color: ${color};
          color: ${desaturate(desaturate_percentage, darken(darken_percentage, color))}
        }
      }
    `
  }, '')

export default class Message extends BaseWithConsumer {
  static displayName ='Message'
  static defaultProps = {
    as: 'div',
  }

  static Style = theme => css`
    ${block}
    background-color: ${theme['message-background-color']};
    border-radius: ${theme['message-radius']};
    font-size: ${theme['size-normal']};
    strong {
      color: currentColor;
    }
    a:not(.button):not(.tag) {
      color: currentColor;
      text-decoration: underline;
    }
    /* Sizes */
    &.is-small {
      font-size: ${theme['size-small']};
    }
    &.is-medium {
      font-size: ${theme['size-medium']};
    }
    &.is-large {
      font-size: ${theme['size-large']};
    }
    /* Colors */
    ${colorClasses(theme)}
  `
}


Message.Header = MessageHeader
Message.Body = MessageBody
