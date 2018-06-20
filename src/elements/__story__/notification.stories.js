/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Notification from '../notification'
import Delete from '../delete'

storiesOf('Elements/', module)
  .add('Notification', () => (
    <div>
      <Notification >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-primary" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-link" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-info" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-success" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-warning" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
      <Notification className="is-danger" >
        <Delete />
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
        <strong>Pellentesque risus mi</strong>,
        tempus quis placerat ut, porta nec nulla.
        Vestibulum rhoncus ac ex sit amet fringilla.
        Nullam gravida purus diam, et dictum <a href="/" >felis venenatis</a> efficitur.
        Sit amet, consectetur adipiscing elit
      </Notification >
    </div>
  ))
