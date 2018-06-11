import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components'
import Vars from '../src/utilities/vars'
const elements = require.context('../src/elements', true, /\.stories\.js$/)

const ThemeDecorator = (story) => {
  return (
    <ThemeProvider theme={Vars.getVariables()}>
      {story()}
    </ThemeProvider>
  )
}

function loadStories() {
  addDecorator(ThemeDecorator);
  elements.keys().forEach((filename) => elements(filename))
}

configure(loadStories, module);