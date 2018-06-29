import styled from 'styled-components'
import { block, loader } from '../utilities/mixins'
import { fromTheme } from '../utilities/functions'

export const Block = styled.div`
  ${block}
`
export const Heading = styled.h6`
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
`

export const Highlight = styled.strong`
  ${block}
  font-weight: ${fromTheme('weight-normal')};
  max-width: 100%;
  overflow: hidden;
  padding: 0;
  pre {
    overflow: auto;
    max-width: 100%;
  }
`
export const Loader = styled.div`
  ${loader}
`
export const Num = styled.span`
  align-items: center;
  background-color: ${fromTheme('background')};
  border-radius: ${fromTheme('radius-rounded')};
  display: inline-flex;
  font-size: ${fromTheme('size-medium')};
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top;
`
