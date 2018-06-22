/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from '../box'

const Link = Box.withComponent('a')

storiesOf('Elements/Box', module)
  .add('Default', () => (
    <Box>
      Just a Box
    </Box>
  ))
  .add('As link', () => (
    <Link href="/">
      Just a Box as a Link
    </Link>
  ))
