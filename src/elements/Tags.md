##### Simple Tag
```react
<Tag className="is-info">
  Just a Tag
</Tag>
```
##### As a link
```react
const Link = Tag.withComponent('a');
<Link href="/" className="is-black">
  Just a Tag
</Link>
```
##### Modifiers
``` react
<Tags>
  <Tag className="is-rounded is-white" >
    is-rounded
  </Tag>
  <Tag className="is-delete is-white" />
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
