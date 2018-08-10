import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import Vars from '../utilities/vars'
import { Content, Control } from '../'

const defaultProps = { theme: Vars.getVariables() }

const MediaPartial = styled.article`
  align-items: flex-start;
  display: flex;
  text-align: left;
  ${Content}:not(:last-child) {
    margin-bottom: 0.75rem;
  }
`
export const Media = styled(MediaPartial)`
  & + ${/* sc-custom ".media" */MediaPartial} {
    border-top: 1px solid ${({ theme }) => rgba(theme['border'], 0.5)};
    margin-top: 1rem;
    padding-top: 1rem;
  }
  ${/* sc-custom ".media" */MediaPartial} {
    border-top: 1px solid ${({ theme }) => rgba(theme['border'], 0.5)};
    display: flex;
    padding-top: 0.75rem;
    ${/* sc-custom ".content" */Content}:not(:last-child),
    ${/* sc-custom ".constrol" */Control}:not(:last-child) {
      margin-bottom: 0.5rem;
    }
    ${/* sc-custom ".media" */MediaPartial} {
      padding-top: 0.5rem;
    }
    ${/* sc-custom ".media" */MediaPartial} + ${/* sc-custom ".media" */MediaPartial} {
      margin-top: 0.5rem;
    }
  }

  /* Sizes */
  &.is-large {
    & + ${/* sc-custom ".media" */MediaPartial} { /* stylelint-disable-line no-descending-specificity */
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
`
Media.defaultProps = defaultProps

const mediaShared = css`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
`

export const MediaLeft = styled.div`
  ${mediaShared}
  margin-right: 1rem;
`
export const MediaRight = styled.div`
  ${mediaShared}
  margin-left: 1rem;
`
export const MediaContent = styled.div`
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
`

Media.Left = MediaLeft
Media.Right = MediaRight
Media.Content = MediaContent
