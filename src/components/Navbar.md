```react
const NavbarItemLink = Navbar.Item.withComponent('a');
<Navbar className="is-transparent">
  <Navbar.Brand>
    <NavbarItemLink href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </NavbarItemLink>
    <Navbar.Burger>
      <span/>
      <span/>
      <span/>
    </Navbar.Burger>
  </Navbar.Brand>

  <Navbar.Menu>
    <Navbar.Start>
      <NavbarItemLink href="https://bulma.io/">
        Home
      </NavbarItemLink>
      <NavbarItemLink className="has-dropdown is-hoverable">
        <Navbar.Link href="/documentation/overview/start/">
          Docs
        </Navbar.Link>
        <Navbar.Dropdown className="is-boxed">
          <NavbarItemLink href="/documentation/overview/start/">
            Overview
          </NavbarItemLink>
          <NavbarItemLink href="https://bulma.io/documentation/modifiers/syntax/">
            Modifiers
          </NavbarItemLink>
          <NavbarItemLink href="https://bulma.io/documentation/columns/basics/">
            Columns
          </NavbarItemLink>
          <NavbarItemLink href="https://bulma.io/documentation/layout/container/">
            Layout
          </NavbarItemLink>
          <NavbarItemLink href="https://bulma.io/documentation/form/general/">
            Form
          </NavbarItemLink>
          <Navbar.Divider/>
          <NavbarItemLink href="https://bulma.io/documentation/elements/box/">
            Elements
          </NavbarItemLink>
          <NavbarItemLink className="is-active" href="https://bulma.io/documentation/components/breadcrumb/">
            Components
          </NavbarItemLink>
        </Navbar.Dropdown>
      </NavbarItemLink>
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