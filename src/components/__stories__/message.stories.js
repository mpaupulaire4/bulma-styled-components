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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
          Vestibulum rhoncus ac ex sit amet fringilla.
          Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
          Aenean ac <em>eleifend lacus</em>, in mollis lectus.
          Donec sodales, arcu et sollicitudin porttitor,
          tortor urna tempor ligula, id porttitor mi magna a neque.
          Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </Message.Body>
      </Message>
    </div>
  ))
