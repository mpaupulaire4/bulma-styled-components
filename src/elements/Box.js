import { css } from 'emotion'
import { rgba } from 'polished'
import { BaseWithConsumer } from '../base/Class'
import { block } from '../utilities/mixins'

BULMA_VARS({
  get 'box-color'() { return this['text'] },
  get 'box-background-color'() { return this['white'] },
  get 'box-radius'() { return this['radius-large'] },
  get 'box-shadow'() { return `0 2px 3px ${rgba(this['black'], 0.1)}, 0 0 0 1px ${rgba(this['black'], 0.1)}` },
  'box-padding': '1.25rem',
  get 'box-link-hover-shadow'() { return `0 2px 3px ${rgba(this['black'], 0.1)}, 0 0 0 1px ${this['link']}` },
  get 'box-link-active-shadow'() { return `inset 0 1px 2px ${rgba(this['black'], 0.2)}, 0 0 0 1px ${this['link']}` },
})

export default class Box extends BaseWithConsumer {
  static displayName ='Box'
  static defaultProps = {
    as: 'div',
  }

  static Style = (theme, { as }) => css`
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

