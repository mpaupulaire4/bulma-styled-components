The following form controls components are supported:
* `<Label />`
* `<Input />`
* `<Textarea />`
* `<Select />`
* `<Checkbox />`
* `<Tadio />`
* `<Button />`
* `<Help />`

Each of them should be wrapped in a `<Control />` container.
When combining several controls in a form, use the `<Field />` component as a container, to keep the spacing consistent.

```react
<Control>
  <Field>
    <Label>Name</Label>
    <Control>
      <Input class="input" type="text" placeholder="Text input" />
    </Control>
  </Field>

  <Field>
    <Label>Username</Label>
    <Control className="has-icons-left has-icons-right">
      <Input className="is-success" type="text" placeholder="Text input" value="bulma" />
      <Icon className="is-small is-left">
        <i class="fa fa-user"></i>
      </Icon>
      <Icon className="is-small is-right">
        <i class="fa fa-check"></i>
      </Icon>
    </Control>
    <Help className="is-success">This username is available</Help>
  </Field>

  <Field>
    <Label>Email</Label>
    <Control className="has-icons-left has-icons-right">
      <Input className="is-danger" type="email" placeholder="Email input" value="hello@"/>
      <Icon className="is-small is-left">
        <i class="fa fa-envelope"></i>
      </Icon>
      <Icon className="is-small is-right">
        <i class="fa fa-exclamation-triangle"></i>
      </Icon>
    </Control>
    <Help className="is-danger">This email is invalid</Help>
  </Field>

  <Field>
    <Label>Subject</Label>
    <Control>
      <Select>
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </Select>
    </Control>
  </Field>

  <Field>
    <Label>Message</Label>
    <Control>
      <Textarea placeholder="Textarea" />
    </Control>
  </Field>

  <Field>
    <Control>
      <Checkbox>
        <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
      </Checkbox>
    </Control>
  </Field>

  <Field>
    <Control>
      <Radio>
        <input type="radio" name="question"/> Yes
      </Radio>
      <Radio>
        <input type="radio" name="question"/> No
      </Radio>
    </Control>
  </Field>

  <Field className="is-grouped">
    <Control>
      <Button className="is-link">Submit</Button>
    </Control>
    <Control>
      <Button className="is-text">Cancel</Button>
    </Control>
  </Field>
</Control>
```

## Form Field
The `<Field />` container is a simple container for:
* a text `<label />`
* a form `<Control />`
* an optional `<Help />` text

``` react
<Field>
  <Label>Label</Label>
  <Control>
    <Input type="text" placeholder="Text input" />
  </Control>
  <Help>This is a help text</Help>
</Field>
```

## Form Control
The `<Control />` is a versatile container meant to enhance single form controls. Because it has the same height as a control elements, it can only contain the following elements:
* `<Input />`
* `<Select />`
* `<Button />`
* `<Icon />`

``` react
<Control>
  <Input type="text" placeholder="Text input" />
</Control>
```
``` react
<Control>
  <Select>
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </Select>
</Control>
```
``` react
<Control>
  <Button className="is-primary">Submit</Button>
</Control>
```

## Form Addons
If you want to attach controls together, use the has-addons modifier on the field container:

```react
<Field className="has-addons">
  <Control>
    <Input type="text" placeholder="Find a repository" />
  </Control>
  <Control>
    <Button className="is-info">
      Search
    </Button>
  </Control>
</Field>
```

You can attach inputs, buttons, and dropdowns only.

It can be useful to append a static button.

```react
<Field className="has-addons">
  <Control>
    <Input type="text" placeholder="Your email" />
  </Control>
  <Control>
    <Button className="is-static">
      @gmail.com
    </Button>
  </Control>
</Field>
```

Use the is-expanded modifier on the element you want to fill up the remaining space (in this case, the input):

```react
<div>
  <Field className="has-addons">
    <Control>
      <Select>
        <select>
          <option>$</option>
          <option>£</option>
          <option>€</option>
        </select>
      </Select>
    </Control>
    <Control>
      <Input type="text" placeholder="Amount of money" />
    </Control>
    <Control>
      <Button>
        Transfer
      </Button>
    </Control>
  </Field>

  <Field className="has-addons">
    <Control>
      <Select>
        <select>
          <option>$</option>
          <option>£</option>
          <option>€</option>
        </select>
      </Select>
    </Control>
    <Control className="is-expanded">
      <Input type="text" placeholder="Amount of money" />
    </Control>
    <Control>
      <Button>
        Transfer
      </Button>
    </Control>
  </Field>
</div>
```