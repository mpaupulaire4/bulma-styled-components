/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Progress from '../progress'

storiesOf('Elements', module)
  .add('Progress', () => (
    <div>
      Sizes
      <Progress className="is-small" value="15" max="100" />
      <Progress value="15" max="100" />
      <Progress className="is-medium" value="15" max="100" />
      <Progress className="is-large" value="15" max="100" />
      Colors
      <Progress className="is-primary" value="20" max="100" />
      <Progress className="is-link" value="40" max="100" />
      <Progress className="is-info" value="50" max="100" />
      <Progress className="is-success" value="60" max="100" />
      <Progress className="is-warning" value="80" max="100" />
      <Progress className="is-danger" value="90" max="100" />
    </div>
  ))
