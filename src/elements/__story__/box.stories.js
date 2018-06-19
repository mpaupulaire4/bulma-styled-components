/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import box from '../box'

storiesOf('Elements/Box', module)
  .add('Default', () => {
    const Box = styled.div`
      ${box([])}
    `
    return (
      <Box>
        Just a Box
      </Box>
    )
  })
  .add('As link', () => {
    const Box = styled.a`
      ${box()}
    `
    return (
      <Box href="">
        Just a Box as a Link
      </Box>
    )
  })
