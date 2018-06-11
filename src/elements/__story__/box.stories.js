/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import box from '../box'

storiesOf('Box', module)
  .add('Default', () => {
    const Box = styled.div`
      ${box}
    `
    return (
      <Box >
        hey hey
      </Box>
    )
  })
  .add('As link', () => {
    const Box = styled.a`
      ${box}
    `
    return (
      <Box is-a-tag href="">
        hey hey
      </Box>
    )
  })
