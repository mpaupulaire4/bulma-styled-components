/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Delete from '../../elements/delete'
import Message from '../message'


storiesOf('Components', module)
  .add('Message', () => (
    <div>
      <Message >
        <Message.Header>
          hey
          <Delete />
        </Message.Header>
        <Message.Body>
          hey
        </Message.Body>
      </Message>
    </div>
  ))
