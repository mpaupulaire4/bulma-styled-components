import styled from 'styled-components'
import {
  desktop,
  until_widescreen,
  until_fullhd,
  widescreen,
  fullhd,
} from '../utilities/mixins'

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  ${({ theme }) => desktop`
    max-width: ${theme['desktop']} - (2 * ${theme['gap']});
    width: ${theme['desktop']} - (2 * ${theme['gap']});
    &.is-fluid {
      margin-left: ${theme['gap']};
      margin-right: ${theme['gap']};
      max-width: none;
      width: auto;
    }
  `}
  ${({ theme }) => until_widescreen`
    &.is-widescreen {
      max-width: ${theme['widescreen']} - (2 * ${theme['gap']});
      width: auto;
    }
  `}
  ${({ theme }) => until_fullhd`
    &.is-fullhd {
      max-width: ${theme['fullhd']} - (2 * ${theme['gap']});
      width: auto;
    }
  `}
  ${({ theme }) => widescreen`
    max-width: ${theme['widescreen']} - (2 * ${theme['gap']});
    width: ${theme['widescreen']} - (2 * ${theme['gap']});
  `}
  ${({ theme }) => fullhd`
    max-width: ${theme['fullhd']} - (2 * ${theme['gap']});
    width: ${theme['fullhd']} - (2 * ${theme['gap']});
  `}
`
