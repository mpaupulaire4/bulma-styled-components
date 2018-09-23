import { css as emotion_css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'

Vars.addDerivedDefault(vars => ({
  'box-color': vars['text'],
  'box-background-color': vars['white'],
  'box-radius': vars['radius-large'],
  'box-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${rgba(vars['black'], 0.1)}`,
  'box-padding': '1.25rem',
  'box-link-hover-shadow': `0 2px 3px ${rgba(vars['black'], 0.1)}, 0 0 0 1px ${vars['link']}`,
  'box-link-active-shadow': `inset 0 1px 2px ${rgba(vars['black'], 0.2)}, 0 0 0 1px ${vars['link']}`,
}))

export default class Box extends BaseWithConsumer {
  static defaultProps = {
    as: 'div',
  }

  static Style = (theme, { as }) => emotion_css`
    ${block}
    background-color: ${theme['box-background-color']};
    border-radius: ${theme['box-radius']};
    box-shadow: ${theme['box-shadow']};
    color: ${theme['box-color']};
    display: block;
    padding: ${theme['box-padding']};
    ${as === 'a' ? `
    &:hover,
    &:focus {
      box-shadow: ${theme['box-link-hover-shadow']};
    }
    &:active {
      box-shadow: ${theme['box-link-active-shadow']};
    }` : ''}
  `
}

