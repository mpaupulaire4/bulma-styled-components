``` js
const NavbarItemLink = Navbar.Item.withComponent('a');
<Hero className="is-primary is-medium">
  {/* Hero head: will stick at the top */}
  <Hero.Head>
    <Navbar>
      <Container>
        <Navbar.Brand>
          <NavbarItemLink>
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
          </NavbarItemLink>
          <Navbar.Burger className="burger">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.End>
            <NavbarItemLink className="is-active">
              Home
            </NavbarItemLink>
            <NavbarItemLink>
              Examples
            </NavbarItemLink>
            <NavbarItemLink>
              Documentation
            </NavbarItemLink>
            <Navbar.Item>
              <Button className="is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </Button>
            </Navbar.Item>
          </Navbar.End>
        </Navbar.Menu>
      </Container>
    </Navbar>
  </Hero.Head>

  {/* Hero content: will be in the middle */}
  <Hero.Body>
    <Container className="has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
    </Container>
  </Hero.Body>

  {/* Hero footer: will stick at the bottom */}
  <Hero.Foot>
    <Tabs className="is-boxed">
      <Container>
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </Container>
    </Tabs>
  </Hero.Foot>
</Hero>

```