/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import Media from '../media'
import Image from '../../elements/image'
import Content from '../../elements/content'
import Box from '../../elements/box'
import Delete from '../../elements/delete'

storiesOf('Layout', module)
  .add('Media', () => (
    <div>
      <Box>
        <Media>
          <Media.Left>
            <Image className="is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
            </Image>
          </Media.Left>
          <Media.Content>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </Content>
            <Media>
              <Media.Left>
                <Image className="is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
                </Image>
              </Media.Left>
              <Media.Content>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </Content>
                <Media>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </Media>
                <Media>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                </Media>
              </Media.Content>
            </Media>
            <Media>
              <Media.Left>
                <Image className="is-64x64">
                  <img src="https://bulma.io/images/placeholders/128x128.png" alt="" />
                </Image>
              </Media.Left>
              <Media.Content>
                <Content>
                  <p>
                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                    Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </Content>
              </Media.Content>
            </Media>
          </Media.Content>
          <Media.Right>
            <Delete />
          </Media.Right>
        </Media>
      </Box>
    </div>
  ))
