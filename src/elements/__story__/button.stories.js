/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button, Buttons } from '../buttons'

const events = {
  onClick: action('clicked'),
}

const colors = [
  'is-primary',
  'is-link',
  'is-info',
  'is-success',
  'is-warning',
  'is-danger',
]

storiesOf('Elements/Button', module)
  .add('Colors', () => {
    const other = [
      'is-white',
      'is-light',
      'is-dark',
      'is-black',
      'is-text',
    ]
    return (
      <Buttons>
        {other.map(color => (
          <Button {...events} key={color} className={`${color}`} >{color}</Button>
        ))}
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} >{color}</Button>
        ))}
      </Buttons>
    )
  })
  .add('Sizes', () => (
    <Buttons>
      <Button {...events} className="is-small" >Small</Button>
      <Button {...events} >Normal</Button>
      <Button {...events} className="is-medium" >Medium</Button>
      <Button {...events} className="is-large" >Large</Button>
    </Buttons>
  ))
  .add('Styles', () => {
    const P = Buttons.extend`
      background-color: ${props => props.theme.primary};
    `
    return (
      <div>
        <h1>Rounded</h1>
        <Buttons>
          {colors.map(color => (
            <Button {...events} key={color} className={`${color} is-rounded`} >Rounded</Button>
          ))}
        </Buttons>
        <h1>Outlined</h1>
        <Buttons>
          {colors.map(color => (
            <Button {...events} key={color} className={`${color} is-outlined`} >Outlined</Button>
          ))}
        </Buttons>
        <h1>Inverted</h1>
        <Buttons>
          {colors.map(color => (
            <Button {...events} key={color} className={`${color} is-inverted`} >Inverted</Button>
          ))}
        </Buttons>
        <h1>Outlined & Inverted</h1>
        <P>
          {colors.map(color => (
            <Button {...events} key={color} className={`${color} is-outlined is-inverted`} >Inverted</Button>
          ))}
        </P>
      </div>
    )
  })
  .add('States', () => (
    <div>
      <h1>Normal</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} >Normal</Button>
        ))}
      </Buttons>
      <h1>Hover</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color} is-hovered`} >Hover</Button>
        ))}
      </Buttons>
      <h1>Focus</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color} is-focused`} >Focus</Button>
        ))}
      </Buttons>
      <h1>Active</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color} is-active`} >Active</Button>
        ))}
      </Buttons>
      <h1>Loading</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color} is-loading`} >Loading</Button>
        ))}
      </Buttons>
      <h1>Static</h1>
      <Buttons>
        <Button {...events} className="is-static" >Static</Button>
      </Buttons>
      <h1>Disabled</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} disabled >Disabled</Button>
        ))}
      </Buttons>
    </div>
  ))
  .add('Button Lists', () => (
    <div>
      <h1>Normal</h1>
      <Buttons>
        <Button {...events} className="is-success" >Save Changes</Button>
        <Button {...events} className="is-info" >Save and Continue</Button>
        <Button {...events} className="is-danger" >Cancel</Button>
      </Buttons>
      <h1>Long Lists Wrap</h1>
      <Buttons>
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} >Hover</Button>
        ))}
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} >Hover</Button>
        ))}
        {colors.map(color => (
          <Button {...events} key={color} className={`${color}`} >Hover</Button>
        ))}
      </Buttons>
      <h1>Attached Together</h1>
      <Buttons className="has-addons">
        <Button {...events} >Yes</Button>
        <Button {...events} >Maybe</Button>
        <Button {...events} >No</Button>
      </Buttons>
      <h1>Alignment Modifiers</h1>
      <Buttons className="has-addons is-centered">
        <Button {...events} >Yes</Button>
        <Button {...events} >Maybe</Button>
        <Button {...events} >No</Button>
      </Buttons>
      <Buttons className="has-addons is-right">
        <Button {...events} >Yes</Button>
        <Button {...events} >Maybe</Button>
        <Button {...events} >No</Button>
      </Buttons>
      <h1>Is Selected Modifier</h1>
      <Buttons className="has-addons">
        <Button {...events} className="is-selected is-success">Yes</Button>
        <Button {...events} >Maybe</Button>
        <Button {...events} >No</Button>
      </Buttons>
      <Buttons className="has-addons">
        <Button {...events} >Yes</Button>
        <Button {...events} className="is-selected is-info">Maybe</Button>
        <Button {...events} >No</Button>
      </Buttons>
      <Buttons className="has-addons">
        <Button {...events} >Yes</Button>
        <Button {...events} >Maybe</Button>
        <Button {...events} className="is-selected is-danger">No</Button>
      </Buttons>
    </div>
  ))
