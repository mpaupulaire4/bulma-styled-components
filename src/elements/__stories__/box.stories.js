/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Box } from '../box'

const Link = Box.withComponent('a')

storiesOf('Elements', module)
  .add('Box', () => (
    <div>
      <Box>
        Just a Box
      </Box>
      <Link href="/">
        Just a Box as a Link
      </Link>
    </div>
  ))
