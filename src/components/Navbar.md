```react
<Navbar className="is-transparent">
  <Navbar.Brand>
    <Navbar.Item as="a" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </Navbar.Item>
    <Navbar.Burger>
      <span/>
      <span/>
      <span/>
    </Navbar.Burger>
  </Navbar.Brand>

  <Navbar.Menu>
    <Navbar.Start>
      <Navbar.Item as="a" href="https://bulma.io/">
        Home
      </Navbar.Item>
      <Navbar.Item as="a" className="has-dropdown is-hoverable">
        <Navbar.Link href="/documentation/overview/start/">
          Docs
        </Navbar.Link>
        <Navbar.Dropdown className="is-boxed">
          <Navbar.Item as="a" href="/documentation/overview/start/">
            Overview
          </Navbar.Item>
          <Navbar.Item as="a" href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </Navbar.Item>
          <Navbar.Item as="a" href="https://bulma.io/documentation/columns/basics/">
            Columns
          </Navbar.Item>
          <Navbar.Item as="a" href="https://bulma.io/documentation/layout/container/">
            Layout
          </Navbar.Item>
          <Navbar.Item as="a" href="https://bulma.io/documentation/form/general/">
            Form
          </Navbar.Item>
          <Navbar.Divider/>
          <Navbar.Item as="a" href="https://bulma.io/documentation/elements/box/">
            Elements
          </Navbar.Item>
          <Navbar.Item as="a" className="is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </Navbar.Item>
        </Navbar.Dropdown>
      </Navbar.Item>
    </Navbar.Start>

    <Navbar.End>
      <Navbar.Item>
        <Field className="is-grouped">
          <Control>
            <Button>
              <Icon>
                <i className="fa fa-twitter"></i>
              </Icon>
              <span>
                Tweet
              </span>
            </Button>
          </Control>
          <Control>
            <Button className="is-primary">
              <Icon>
                <i className="fa fa-download"></i>
              </Icon>
              <span>Download</span>
            </Button>
          </Control>
        </Field>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
```