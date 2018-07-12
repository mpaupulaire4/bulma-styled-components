/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import { getLuminance, parseToHsl, lighten, desaturate, darken } from 'polished'
import Vars from '../utilities/vars'
import { fromTheme } from '../utilities/functions'
import { block } from '../utilities/mixins'
import { Delete } from '../elements'


Vars.addDerivedDefault(vars => ({
  'message-background-color': vars['background'],
  'message-radius': vars['radius'],

  'message-header-background-color': vars['text'],
  'message-header-color': vars['text-invert'],
  'message-header-weight': vars['weight-bold'],
  'message-header-padding': '0.75em 1em',
  'message-header-radius': vars['radius'],

  'message-body-border-color': vars['border'],
  'message-body-border-width': '0 0 0 4px',
  'message-body-color': vars['text'],
  'message-body-padding': '1.25em 1.5em',
  'message-body-radius': vars['radius'],

  'message-body-pre-background-color': vars['white'],
  'message-body-pre-code-background-color': 'transparent',

  'message-header-body-border-width': 0,
}))

const defaultProps = { theme: Vars.getVariables() }

const colorClasses = props => Object.entries(props.theme.colors)
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
        .message-header {
          background-color: ${color};
          color: ${color_invert}
        }
        .message-body {
          border-color: ${color};
          color: ${desaturate(desaturate_percentage, darken(darken_percentage, color))}
        }
      }
    `
  }, '')

export const Message = styled.div`
  ${block}
  background-color: ${fromTheme('message-background-color')};
  border-radius: ${fromTheme('message-radius')};
  font-size: ${fromTheme('size-normal')};
  strong {
    color: currentColor;
  }
  a:not(.button):not(.tag) {
    color: currentColor;
    text-decoration: underline;
  }
  /* Sizes */
  &.is-small {
    font-size: ${fromTheme('size-small')};
  }
  &.is-medium {
    font-size: ${fromTheme('size-medium')};
  }
  &.is-large {
    font-size: ${fromTheme('size-large')};
  }
  /* Colors */
  ${colorClasses}
`
Message.defaultProps = defaultProps

const MessageHeader = styled.div`
  align-items: center;
  background-color: ${fromTheme('message-header-background-color')};
  border-radius: ${fromTheme('message-header-radius')} ${fromTheme('message-header-radius')} 0 0;
  color: ${fromTheme('message-header-color')};
  display: flex;
  font-weight: ${fromTheme('message-header-weight')};
  justify-content: space-between;
  line-height: 1.25;
  padding: ${fromTheme('message-header-padding')};
  position: relative;
  ${Delete} { /* stylelint-disable-line */
    flex-grow: 0;
    flex-shrink: 0;
    margin-left: 0.75em;
  }
  & + .message-body {
    border-width: ${fromTheme('message-header-body-border-width')};
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`
MessageHeader.defaultProps = defaultProps
Message.Header = MessageHeader

const MessageBody = styled.div`
  border-color: ${fromTheme('message-body-border-color')};
  border-radius: ${fromTheme('message-body-radius')};
  border-style: solid;
  border-width: ${fromTheme('message-body-border-width')};
  color: ${fromTheme('message-body-color')};
  padding: ${fromTheme('message-body-padding')};
  code,
  pre {
    background-color: ${fromTheme('message-body-pre-background-color')};
  }
  pre code {
    background-color: ${fromTheme('message-body-pre-code-background-color')};
  }
`
MessageBody.defaultProps = defaultProps
Message.Body = MessageBody
