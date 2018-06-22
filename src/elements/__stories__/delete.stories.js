/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Delete from '../delete'

storiesOf('Elements', module)
  .add('Delete', () => (
    <div>
      Just a little delete button
      <p>
        <Delete className="is-small" />
        <Delete />
        <Delete className="is-medium" />
        <Delete className="is-large" />
      </p>
    </div>
  ))
