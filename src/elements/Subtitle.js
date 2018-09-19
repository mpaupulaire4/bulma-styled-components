/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'
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

const Subtitle = styled.h2`
  ${block}
  word-break: break-word;
  em,
  span {
    font-weight: inherit;
  }
  sub {
    font-size: ${fromTheme('title-sub-size')};
  }
  sup {
    font-size: ${fromTheme('title-sup-size')};
  }
  ${Tag} { /* stylelint-disable-line */
    vertical-align: middle;
  }
  color: ${fromTheme('subtitle-color')};
  font-size: ${fromTheme('subtitle-size')};
  font-weight: ${fromTheme('subtitle-weight')};
  line-height: ${fromTheme('subtitle-line-height')};
  strong {
    color: ${fromTheme('subtitle-strong-color')};
    font-weight: ${fromTheme('subtitle-strong-weight')};
  }
  &:not(.is-spaced) + ${/* sc-selector */Title} {
    margin-top: ${fromTheme('subtitle-negative-margin')};
  }
  /* Sizes */
  ${({ theme }) => theme['sizes'].reduce((acc, size, i) => css`
    ${acc}
    &.is-${i + 1} {
      font-size: ${size};
    }
  `, '')}
`

export default Subtitle
