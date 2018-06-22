/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Breadcrumb from '../breadcrumb'

storiesOf('Elements/', module)
  .add('Breadcrumb', () => (
    <div>
      <Breadcrumb >
        <ul>
          <li><a href="/">Bulma</a></li>
          <li><a href="/">Documentation</a></li>
          <li><a href="/">Components</a></li>
          <li className="is-active"><a href="/" >Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
      <Breadcrumb className="has-arrow-separator">
        <ul>
          <li><a href="/">Bulma</a></li>
          <li><a href="/">Documentation</a></li>
          <li><a href="/">Components</a></li>
          <li className="is-active"><a href="/" >Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
      <Breadcrumb className="has-bullet-separator">
        <ul>
          <li><a href="/">Bulma</a></li>
          <li><a href="/">Documentation</a></li>
          <li><a href="/">Components</a></li>
          <li className="is-active"><a href="/" >Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
      <Breadcrumb className="has-dot-separator">
        <ul>
          <li><a href="/">Bulma</a></li>
          <li><a href="/">Documentation</a></li>
          <li><a href="/">Components</a></li>
          <li className="is-active"><a href="/" >Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
      <Breadcrumb className="has-succeeds-separator">
        <ul>
          <li><a href="/">Bulma</a></li>
          <li><a href="/">Documentation</a></li>
          <li><a href="/">Components</a></li>
          <li className="is-active"><a href="/" >Breadcrumb</a></li>
        </ul>
      </Breadcrumb>
    </div>
  ))
