/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Dropdown } from '../'
import { Button } from '../../elements'

storiesOf('Components', module)
  .add('Dropdown', () => {
    const Temp = Button.withComponent('button')
    return (
      <div>
        <Dropdown className="is-active">
          <div>
            <Temp aria-haspopup="true" aria-controls="dropdown-menu">
              Dropdown button
            </Temp>
          </div>
          <Dropdown.Menu>
            <Dropdown.Content>
              <Dropdown.Item>
                Dropdown item
              </Dropdown.Item>
              <Dropdown.Item>
                Other dropdown item
              </Dropdown.Item>
              <Dropdown.Item>
                Active dropdown item
              </Dropdown.Item>
              <Dropdown.Item>
                Other dropdown item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>
                With a divider
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  })
