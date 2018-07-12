/* stylelint-disable no-descending-specificity */
import styled, { css } from 'styled-components'
import Vars from '../utilities/vars'
import { block } from '../utilities/mixins'
import { Tag } from './'
import { fromTheme } from '../utilities/functions'

Vars.addDerivedDefault(vars => ({
  'title-color': vars['grey-darker'],
  'title-size': vars['size-3'],
  'title-weight': vars['weight-semibold'],
  'title-line-height': 1.125,
  'title-strong-color': 'inherit',
  'title-strong-weight': 'inherit',
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

const shared = css`
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
`

export const Title = styled.h1`
  ${shared}
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
  &:not(.is-spaced) + .subtitle {
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
export const Subtitle = styled.h2`
  ${shared}
  color: ${fromTheme('subtitle-color')};
  font-size: ${fromTheme('subtitle-size')};
  font-weight: ${fromTheme('subtitle-weight')};
  line-height: ${fromTheme('subtitle-line-height')};
  strong {
    color: ${fromTheme('subtitle-strong-color')};
    font-weight: ${fromTheme('subtitle-strong-weight')};
  }
  &:not(.is-spaced) + .title {
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
