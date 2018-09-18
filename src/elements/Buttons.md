``` react
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
    <Button className="is-success" >Save Changes</Button>
    <Button className="is-info" >Save and Continue</Button>
    <Button className="is-danger" >Cancel</Button>
  </Buttons>
  <h1>Long Lists Wrap</h1>
  <Buttons>
    {colors.map(color => (
      <Button key={color} className={`${color}`} >Click</Button>
    ))}
    {colors.map(color => (
      <Button key={color} className={`${color}`} >Click</Button>
    ))}
    {colors.map(color => (
      <Button key={color} className={`${color}`} >Click</Button>
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
```
