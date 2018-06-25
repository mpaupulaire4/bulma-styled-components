import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import styled, { ThemeProvider } from 'styled-components'
import BulmaStyled from '../src/base'

setOptions({
  name: 'Bulma Styled',
  hierarchySeparator: /\//
})
const elements = require.context('../src', true, /\.stories\.js$/)

const Container = styled.div`
  padding: 15px;
`
const ThemeDecorator = (story) => {
  return (
    <BulmaStyled >
      <Container>
        {story()}
      </Container>
    </BulmaStyled>
  )
}
addDecorator(ThemeDecorator);

function loadStories() {
  elements.keys().forEach((filename) => elements(filename))
}

configure(loadStories, module);