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
      <Button key={color} className={`${color} is-outlined is-inverted`}>Inverted</Button>
    ))}
  </Buttons>
</div>
```
States:
``` js
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
```