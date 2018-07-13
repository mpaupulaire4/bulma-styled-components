``` js
const NavbarItemLink = Navbar.Item.withComponent('a');
<Navbar className="is-transparent">
  <Navbar.Brand>
    <NavbarItemLink href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
    </NavbarItemLink>
    <Navbar.Burger data-target="navbarExampleTransparentExample">
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
        <div class="field is-grouped">
          <p class="control">
            <Button>
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </Button>
          </p>
          <p class="control">
            <Button className="is-primary">
              <span class="icon">
                <i class="fas fa-download"></i>
              </span>
              <span>Download</span>
            </Button>
          </p>
        </div>
      </Navbar.Item>
    </Navbar.End>
  </Navbar.Menu>
</Navbar>
```