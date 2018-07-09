/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabs } from '../'


storiesOf('Components', module)
  .add('Tabs', () => (
    <div>
      <Tabs>
        <ul>
          <li className="is-active"><a href="/">Pictures</a></li>
          <li><a href="/">Music</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Documents</a></li>
        </ul>
      </Tabs>
      <Tabs className="is-boxed">
        <ul>
          <li className="is-active"><a href="/">Pictures</a></li>
          <li><a href="/">Music</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Documents</a></li>
        </ul>
      </Tabs>
      <Tabs className="is-toggle">
        <ul>
          <li className="is-active"><a href="/">Pictures</a></li>
          <li><a href="/">Music</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Documents</a></li>
        </ul>
      </Tabs>
      <Tabs className="is-toggle is-toggle-rounded">
        <ul>
          <li className="is-active"><a href="/">Pictures</a></li>
          <li><a href="/">Music</a></li>
          <li><a href="/">Videos</a></li>
          <li><a href="/">Documents</a></li>
        </ul>
      </Tabs>
    </div>
  ))
