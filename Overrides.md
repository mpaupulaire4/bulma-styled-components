Overriding the default theme is as simple as:
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
<BulmaStyledTheme overrides={{
  primary: 'blue',
  link: 'purple',
  info: 'pink',
  success: 'green',
  warning: 'yellow',
  danger: 'red',
}}>
  <Buttons>
    {colors.map(color => (
      <Button key={color} className={`${color}`} >{color}</Button>
    ))}
  </Buttons>
</BulmaStyledTheme>
```
