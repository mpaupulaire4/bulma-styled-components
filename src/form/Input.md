#### Basic
``` js
<Input type="text" placeholder="Text Input"/>
```

#### Colors
``` js
<div>
  <Field>
    <Control>
      <Input className="is-primary" type="text" placeholder="Primary input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-info" type="text" placeholder="Info Input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-success" type="text" placeholder="Success Input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-warning" type="text" placeholder="Warning Input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-danger" type="text" placeholder="Danger Input" />
    </Control>
  </Field>
</div>
```

#### Sizes
``` js
<div>
  <Field>
    <Control>
      <Input className="is-small" type="text" placeholder="small input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input type="text" placeholder="Normal Input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-mediem" type="text" placeholder="medium Input" />
    </Control>
  </Field>
  <Field>
    <Control>
      <Input className="is-large" type="text" placeholder="Large Input" />
    </Control>
  </Field>
</div>
```

#### Styles
``` js
<div>
  <Input className="is-rounded" type="text" placeholder="Rounded Input"/>
  <Input
    type="text"
    className="is-static"
    value="Some Text Here"/>
  <Input
    type="text"
    readonly
    value="This text is readonly"/>
</div>
```
