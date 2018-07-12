##### Simple Tag
```js
<Tag>
  Just a Tag
</Tag>
```
##### As a link
```js
const Link = Tag.withComponent('a');
<Link href="/">
  Just a Tag
</Link>
```
##### Modifiers
``` js
<Tags>
  <Tag className="is-rounded" >
    is-rounded
  </Tag>
  <Tag className="is-delete" />
</Tags>
```
##### Colors
``` js
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
