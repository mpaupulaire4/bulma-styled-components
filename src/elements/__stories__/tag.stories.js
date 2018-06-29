/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tag, Tags, Delete } from '../'

const Link = Tag.withComponent('a')

const colors = [
  'black',
  'dark',
  'light',
  'white',
  'primary',
  'link',
  'info',
  'success',
  'warning',
  'danger',
]

storiesOf('Elements', module)
  .add('Tag', () => (
    <div>
      <h1>Tag</h1>
      <Tag>
        Just a Tag
      </Tag>

      <h1>As a Link</h1>
      <Link href="/">
        Just a Tag
      </Link>

      <h1>Modifiers</h1>
      <Tags>
        <Tag className="is-rounded" >
          is-rounded
        </Tag>
        <Tag className="is-delete" />
      </Tags>
      <h1>colors</h1>
      <Tags>
        {colors.map(color => (
          <Tag key={`${color}-color`} className={`is-${color}`} >
            {color}
          </Tag>
        ))}
      </Tags>
      <h1>With Delete</h1>
      <Tags>
        {colors.map(color => (
          <Tag key={`${color}-delete`} className={`is-${color}`} >
            {color}
            <Delete className="is-small" />
          </Tag>
        ))}
      </Tags>
    </div>
  ))
