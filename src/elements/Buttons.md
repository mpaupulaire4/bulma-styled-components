Colors:
```js
const colors = [
  "is-white",
  "is-light",
  "is-dark",
  "is-black",
  "is-text",
  "is-primary",
  "is-link",
  "is-info",
  "is-success",
  "is-warning",
  "is-danger",
];
<Buttons>
  {colors.map(color => (
    <Button key={color} className={`${color}`} >{color}</Button>
  ))}
</Buttons>
```
})
Sizes:
``` js
  <Buttons>
    <Button className="is-small" >Small</Button>
    <Button >Normal</Button>
    <Button className="is-medium" >Medium</Button>
    <Button className="is-large" >Large</Button>
  </Buttons>
```
Styles:
``` js
<div>
  <h1>Rounded</h1>
  <Buttons>
    {colors.map(color => (
      <Button key={color} className={`${color} is-rounded`} >Rounded</Button>
    ))}
  </Buttons>
  <h1>Outlined</h1>
  <Buttons>
    {colors.map(color => (
      <Button key={color} className={`${color} is-outlined`} >Outlined</Button>
    ))}
  </Buttons>
  <h1>Inverted</h1>
  <Buttons>
    {colors.map(color => (
      <Button key={color} className={`${color} is-inverted`} >Inverted</Button>
    ))}
  </Buttons>
  <h1>Outlined & Inverted</h1>
  <Buttons className="has-background-primary">
    {colors.map(color => (
      <Button key={color} className={`${color} is-outlined is-inverted`} >Inverted</Buttons>
    ))}
  </Button>
</div>
})
```
.add('States', () => (
  <div>
    <h1>Normal</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color}`} >Normal</Button>
      ))}
    </Buttons>
    <h1>Hover</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color} is-hovered`} >Hover</Button>
      ))}
    </Buttons>
    <h1>Focus</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color} is-focused`} >Focus</Button>
      ))}
    </Buttons>
    <h1>Active</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color} is-active`} >Active</Button>
      ))}
    </Buttons>
    <h1>Loading</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color} is-loading`} >Loading</Button>
      ))}
    </Buttons>
    <h1>Static</h1>
    <Buttons>
      <Button className="is-static" >Static</Button>
    </Buttons>
    <h1>Disabled</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color}`} disabled >Disabled</Button>
      ))}
    </Buttons>
  </div>
))
.add('Button Lists', () => (
  <div>
    <h1>Normal</h1>
    <Buttons>
      <Button className="is-success" >Save Changes</Button>
      <Button className="is-info" >Save and Continue</Button>
      <Button className="is-danger" >Cancel</Button>
    </Buttons>
    <h1>Long Lists Wrap</h1>
    <Buttons>
      {colors.map(color => (
        <Button key={color} className={`${color}`} >Hover</Button>
      ))}
      {colors.map(color => (
        <Button key={color} className={`${color}`} >Hover</Button>
      ))}
      {colors.map(color => (
        <Button key={color} className={`${color}`} >Hover</Button>
      ))}
    </Buttons>
    <h1>Attached Together</h1>
    <Buttons className="has-addons">
      <Button >Yes</Button>
      <Button >Maybe</Button>
      <Button >No</Button>
    </Buttons>
    <h1>Alignment Modifiers</h1>
    <Buttons className="has-addons is-centered">
      <Button >Yes</Button>
      <Button >Maybe</Button>
      <Button >No</Button>
    </Buttons>
    <Buttons className="has-addons is-right">
      <Button >Yes</Button>
      <Button >Maybe</Button>
      <Button >No</Button>
    </Buttons>
    <h1>Is Selected Modifier</h1>
    <Buttons className="has-addons">
      <Button className="is-selected is-success">Yes</Button>
      <Button >Maybe</Button>
      <Button >No</Button>
    </Buttons>
    <Buttons className="has-addons">
      <Button >Yes</Button>
      <Button className="is-selected is-info">Maybe</Button>
      <Button >No</Button>
    </Buttons>
    <Buttons className="has-addons">
      <Button >Yes</Button>
      <Button >Maybe</Button>
      <Button className="is-selected is-danger">No</Button>
    </Buttons>
  </div>
))