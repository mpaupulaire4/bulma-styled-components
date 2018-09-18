#### Basic
``` react|responsive
const TempCol = props => (
  <Column className={props.className}>
    <div {...props} className="has-background-primary has-text-white has-text-centered" />
  </Column>
);
<BulmaStyledTheme>
  <Columns>
    <TempCol>Column</TempCol>
    <TempCol>Column</TempCol>
    <TempCol>Column</TempCol>
    <TempCol>Column</TempCol>
  </Columns>
</BulmaStyledTheme>
```
#### Sizes
``` react|responsive
const TempCol = props => (
  <Column className={props.className}>
    <div {...props} className="has-background-primary has-text-white has-text-centered" />
  </Column>
);
<BulmaStyledTheme>
  <Columns>
    <TempCol className="is-four-fifths">is-four-fifths</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-three-quarters">is-three-quarters</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-two-thirds">is-two-thirds</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-three-fifths">is-three-fifths</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-half">is-half</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-two-fifths">is-two-fifths</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-one-third">is-one-third</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-one-quarter">is-one-quarter</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>

  <Columns>
    <TempCol className=" is-one-fifth">is-one-fifth</TempCol>
    <TempCol className="">Auto</TempCol>
    <TempCol className="">Auto</TempCol>
  </Columns>
</BulmaStyledTheme>
```