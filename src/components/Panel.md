``` react
const PanelBlockLink = Panel.Block.withComponent('a');
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
  <PanelBlockLink className="is-active">
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    bulma
  </PanelBlockLink>
  <PanelBlockLink>
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    marksheet
  </PanelBlockLink>
  <PanelBlockLink>
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    minireset.css
  </PanelBlockLink>
  <PanelBlockLink>
    <Panel.Icon>
      <i className="fa fa-book" aria-hidden="true"></i>
    </Panel.Icon>
    jgthms.github.io
  </PanelBlockLink>
  <PanelBlockLink>
    <Panel.Icon>
      <i className="fa fa-code-fork" aria-hidden="true"></i>
    </Panel.Icon>
    daniellowtw/infboard
  </PanelBlockLink>
  <PanelBlockLink>
    <Panel.Icon>
      <i className="fa fa-code-fork" aria-hidden="true"></i>
    </Panel.Icon>
    mojs
  </PanelBlockLink>
  <PanelBlockLink>
    <Input type="checkbox" />
    remember me
  </PanelBlockLink>
  <Panel.Block>
    <Button className="is-link is-outlined is-fullwidth">
      reset all filters
    </Button>
  </Panel.Block>
</Panel>
```