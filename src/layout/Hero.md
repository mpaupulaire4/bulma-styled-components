``` react|responsive
<BulmaStyledTheme>
  <Hero className="is-primary is-large is-bold">
    {/* Hero head: will stick at the top */}
    <Hero.Head>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Navbar.Link className="is-arrowless">
              <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
            </Navbar.Link>
            <Navbar.Burger className="burger">
              <span></span>
              <span></span>
              <span></span>
            </Navbar.Burger>
          </Navbar.Brand>
          <Navbar.Menu>
            <Navbar.End>
              <Navbar.Link className="is-arrowless is-active">
                Home
              </Navbar.Link>
              <Navbar.Link className="is-arrowless">
                Examples
              </Navbar.Link>
              <Navbar.Link className="is-arrowless">
                Documentation
              </Navbar.Link>
              <Navbar.Item>
                <Button className="is-primary is-inverted">
                  <Icon>
                    <i className="fa fa-github"></i>
                  </Icon>
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
        <Title>
          Title
        </Title>
        <Subtitle>
          Subtitle
        </Subtitle>
      </Container>
    </Hero.Body>

    {/* Hero footer: will stick at the bottom */}
    <Hero.Foot>
      <Tabs className="is-boxed">
        <Container>
          <ul>
            <li className="is-active"><a>Overview</a></li>
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
</BulmaStyledTheme>
```