/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Delete, Image, Content } from '../../elements/'
import { Card } from '../'

storiesOf('Components', module)
  .add('Card', () => {
    const Card1 = Card.extend`
      max-width: 500px;
    `
    return (
      <div>
        <Card1 >
          <Card.Header >
            <Card.Header.Title>
              Header
            </Card.Header.Title>
            <Card.Header.Icon>
              <Delete />
            </Card.Header.Icon>
          </Card.Header>
          <Card.Image>
            <Image className="is-4by3">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
            </Image>
          </Card.Image>
          <Card.Content>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="/">@bulmaio</a>. <a href="/">#css</a> <a href="/">#responsive</a>
              <br />
              <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </Content>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Item>Save</Card.Footer.Item>
            <Card.Footer.Item>Edit</Card.Footer.Item>
            <Card.Footer.Item>Delete</Card.Footer.Item>
          </Card.Footer>
        </Card1>
      </div>
    )
  })
