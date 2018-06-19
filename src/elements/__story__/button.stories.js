/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { button } from '../buttons'

const events = {
  onClick: action('clicked'),
}


storiesOf('Elements/Button', module)
  .add('Default', () => {
    const Button = styled.button`
      ${button()}
    `
    return (
      <div>
        <Button {...events}>
          Just a Button
        </Button>
      </div>
    )
  })
