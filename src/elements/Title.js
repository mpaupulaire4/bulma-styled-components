/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'
import Tag from './Tag'
import Subtitle from './Subtitle'

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

const Title = styled.h1`
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
  color: ${fromTheme('title-color')};
  font-size: ${fromTheme('title-size')};
  font-weight: ${fromTheme('title-weight')};
  line-height: ${fromTheme('title-line-height')};
  strong {
    color: ${fromTheme('title-strong-color')};
    font-weight: ${fromTheme('title-strong-weight')};
  }
  & + .highlight {
    margin-top: -0.75rem;
  }
  &:not(.is-spaced) + ${/* sc-selector */Subtitle} {
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
export default Title
