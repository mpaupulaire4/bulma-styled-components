/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import { block } from '../utilities/mixins'
import Title from './Title'
import Tag from './Tag'

BULMA_VARS({
  'title-sub-size': '0.75em',
  'title-sup-size': '0.75em',

  get 'subtitle-color'() { return this['grey-dark'] },
  get 'subtitle-size'() { return this['size-5'] },
  get 'subtitle-weight'() { return this['weight-normal'] },
  'subtitle-line-height': 1.25,
  get 'subtitle-strong-color'() { return this['grey-darker'] },
  get 'subtitle-strong-weight'() { return this['weight-semibold'] },
  'subtitle-negative-margin': '-1.25rem',
})

export default class Subtitle extends BaseWithConsumer {
  static defaultProps = {
    as: 'h2',
  }

  static Style = theme => css`
    ${block}
    word-break: break-word;
    em,
    span {
      font-weight: inherit;
    }
    sub {
      font-size: ${theme['title-sub-size']};
    }
    sup {
      font-size: ${theme['title-sup-size']};
    }
    .${Tag.name} { /* stylelint-disable-line */
      vertical-align: middle;
    }
    color: ${theme['subtitle-color']};
    font-size: ${theme['subtitle-size']};
    font-weight: ${theme['subtitle-weight']};
    line-height: ${theme['subtitle-line-height']};
    strong {
      color: ${theme['subtitle-strong-color']};
      font-weight: ${theme['subtitle-strong-weight']};
    }
    &:not(.is-spaced) + .${/* sc-selector */Title.name} {
      margin-top: ${theme['subtitle-negative-margin']};
    }
    /* Sizes */
    ${theme['sizes'].reduce((acc, size, i) => css`
      ${acc}
      &.is-${i + 1} {
        font-size: ${size};
      }
    `, '')}
  `
}
