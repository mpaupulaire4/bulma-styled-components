```react
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
