/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import { BaseWithConsumer } from '../base/Class'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import Title from './Title'
import Tag from './Tag'

Vars.addDerivedDefault(vars => ({
  'title-sub-size': '0.75em',
  'title-sup-size': '0.75em',

  'subtitle-color': vars['grey-dark'],
  'subtitle-size': vars['size-5'],
  'subtitle-weight': vars['weight-normal'],
  'subtitle-line-height': 1.25,
  'subtitle-strong-color': vars['grey-darker'],
  'subtitle-strong-weight': vars['weight-semibold'],
  'subtitle-negative-margin': '-1.25rem',
}))

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
