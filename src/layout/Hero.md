``` js
<Hero className="is-primary is-medium">
  {/* Hero head: will stick at the top */}
  <Hero.Head>
    <nav class="navbar">
      <Container>
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              Examples
            </a>
            <a class="navbar-item">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
                  <i class="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </Container>
    </nav>
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