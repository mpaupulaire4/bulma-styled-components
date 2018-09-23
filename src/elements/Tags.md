##### Simple Tag
```react
<Tag>
  Just a Tag
</Tag>
```
##### As a link
```react
<Tag as="a" href="/">
  Just a Tag
</Tag>
```
##### Modifiers
``` react
<Tags>
  <Tag className="is-rounded" >
    is-rounded
  </Tag>
  <Tag className="is-delete" />
</Tags>
```
##### Colors
``` react
const colors = [
  "white",
  "light",
  "dark",
  "black",
  "text",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];
<Tags>
  {colors.map(color => (
    <Tag key={color} className={`is-${color}`} >
      {color}
    </Tag>
  ))}
  {colors.map(color => (
    <Tag key={color} className={`is-${color}`} >
      {color}
      <Delete className="is-small" />
    </Tag>
  ))}
</Tags>
```
