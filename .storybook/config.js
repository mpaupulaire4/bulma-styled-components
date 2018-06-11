import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import styled, { ThemeProvider } from 'styled-components'
import init from '../src/base'
import Vars from '../src/utilities/vars'
const elements = require.context('../src/elements', true, /\.stories\.js$/)

const Container = styled.div`
  padding: 15px;
`

const ThemeDecorator = (story) => {
  const theme = init(Vars.getVariables())
  return (
    <ThemeProvider theme={theme}>
      <Container>
        {story()}
      </Container>
    </ThemeProvider>
  )
}

function loadStories() {
  addDecorator(ThemeDecorator);
  elements.keys().forEach((filename) => elements(filename))
}

configure(loadStories, module);