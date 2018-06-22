/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardHeaderTitle,
  CardHeaderIcon,
  CardImage,
  CardContent,
} from '../card'
import Delete from '../../elements/delete'
import Image from '../../elements/image'
import Content from '../../elements/content'

storiesOf('Elements', module)
  .add('Card', () => (
    <div>
      <Card >
        <CardHeader >
          <CardHeaderTitle>
            Header
          </CardHeaderTitle>
          <CardHeaderIcon>
            <Delete />
            <Delete />
          </CardHeaderIcon>
        </CardHeader>
        <CardImage>
          <Image className="is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
          </Image>
        </CardImage>
        <CardContent>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="/">@bulmaio</a>. <a href="/">#css</a> <a href="/">#responsive</a>
            <br />
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </Content>
        </CardContent>
      </Card>
    </div>
  ))
