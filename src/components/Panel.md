``` react
<Panel>
  <Panel.Heading>
    repositories
  </Panel.Heading>
  <Panel.Block>
    <Control className="has-icons-left">
      <Input className="is-small" type="text" placeholder="search"/>
      <Icon className="is-small is-left">
        <i className="fa fa-search" aria-hidden="true"></i>
      </Icon>
    </Control>
  </Panel.Block>
  <Panel.Tabs>
    <a className="is-active">all</a>
    <a>public</a>
    <a>private</a>
    <a>sources</a>
    <a>forks</a>
  </Panel.Tabs>
  <Panel.Block as="a" className="is-active">
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    bulma
  </Panel.Block>
  <Panel.Block as="a">
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    marksheet
  </Panel.Block>
  <Panel.Block as="a">
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    minireset.css
  </Panel.Block>
  <Panel.Block as="a">
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    jgthms.github.io
  </Panel.Block>
  <Panel.Block as="a">
    <Panel.Icon>
      <i className="fa fa-code-fork" aria-hidden="true"></i>
    </Panel.Icon>
    daniellowtw/infboard
  </Panel.Block>
  <Panel.Block as="a">
    <Panel.Icon>
      <i className="fa fa-code-fork" aria-hidden="true"></i>
    </Panel.Icon>
    mojs
  </Panel.Block>
  <Panel.Block as="a">
    <input type="checkbox" />
    remember me
  </Panel.Block>
  <Panel.Block>
    <Button className="is-link is-outlined is-fullwidth">
      reset all filters
    </Button>
  </Panel.Block>
</Panel>
```