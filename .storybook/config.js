import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import styled, { ThemeProvider } from 'styled-components'
import BulmaStyled from '../src'
import Vars from '../src/utilities/vars'


setOptions({
  name: 'Bulma Styled',
  hierarchySeparator: /\//
})
const elements = require.context('../src/elements', true, /\.stories\.js$/)

const Container = styled.div`
  padding: 15px;
`
const ThemeDecorator = (story) => {
  const theme = BulmaStyled.getTheme()
  return (
    <ThemeProvider theme={theme}>
        <Container>
          {story()}
        </Container>
    </ThemeProvider>
  )
}
addDecorator(ThemeDecorator);

function loadStories() {
  elements.keys().forEach((filename) => elements(filename))
}

configure(loadStories, module);