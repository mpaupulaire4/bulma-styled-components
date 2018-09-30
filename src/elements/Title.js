/* stylelint-disable no-descending-specificity */
import { css } from 'emotion'
import Vars from '../utilities/vars'
import { BaseWithConsumer } from '../base/Class'
import { block } from '../utilities/mixins'
import Tag from './Tag'
import { Highlight } from './other'

Vars.addDerivedDefault(vars => ({
  'title-color': vars['grey-darker'],
  'title-size': vars['size-3'],
  'title-weight': vars['weight-semibold'],
  'title-line-height': 1.125,
  'title-strong-color': 'inherit',
  'title-strong-weight': 'inherit',
  'title-sub-size': '0.75em',
  'title-sup-size': '0.75em',

  'subtitle-negative-margin': '-1.25rem',
}))

export default class Title extends BaseWithConsumer {
  static defaultProps = {
    as: 'h1',
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
    color: ${theme['title-color']};
    font-size: ${theme['title-size']};
    font-weight: ${theme['title-weight']};
    line-height: ${theme['title-line-height']};
    strong {
      color: ${theme['title-strong-color']};
      font-weight: ${theme['title-strong-weight']};
    }
    & + .${Highlight.name} {
      margin-top: -0.75rem;
    }
    &:not(.is-spaced) + .Subtitle {
      margin-top: ${theme['subtitle-negative-margin']};
    }
    /* Sizes */
    ${theme['sizes'].reduce((acc, size, i) => `
      ${acc}
      &.is-${i + 1} {
        font-size: ${size};
      }
    `, '')}
  `
}
